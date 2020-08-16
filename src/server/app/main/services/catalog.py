from ..models.EntityModel import EntityModel
from ..models import db
import jwt
import datetime
from ..settings import key
from ..utils.save_data import save_changes
import json 

#Function for fetching catalog data
def get_catalog_data(data):

    per_page = 10
    page = 1
    

    if data["arrivalDate"] and data["departureDate"]:
        checkin = data["arrivalDate"]+" 00:00:00"
        checkout = data["departureDate"]+" 00:00:00"

        query = 'SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.cost_per_night, ee.features, ee.latitude, ee.longitude FROM hotels as ee WHERE ee.id NOT IN ( SELECT hotel_id FROM bookings WHERE checkin_dt <= "%s" AND checkout_dt >= "%s" ) AND'%(checkout, checkin)

        count_query = 'SELECT count(ee.id) FROM hotels as ee WHERE ee.id NOT IN ( SELECT hotel_id FROM bookings WHERE checkin_dt <= "%s" AND checkout_dt >= "%s" ) AND'%(checkout, checkin)

    else:
        query = 'SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.cost_per_night, ee.features, ee.latitude, ee.longitude FROM hotels as ee WHERE'

        count_query = 'SELECT count(ee.id) FROM hotels as ee WHERE'

    if data.get("sleeps"):
        query += ' ee.capacity >= "%s" AND'%(data["sleeps"])
        count_query += ' ee.capacity >= "%s" AND'%(data["sleeps"])

    if data.get("location"):
        query += ' UPPER(ee.city) = "%s" AND'%(data.get("location"))
        count_query += ' UPPER(ee.city) = "%s" AND'%(data.get("location"))
    
    if data.get("maxPrice"):
        cost = int(data["maxPrice"])
        query += ' ee.cost_per_night <= %s AND'%(cost)
        count_query += ' ee.cost_per_night <= %s AND'%(cost)

    if data.get("minPrice"):
        cost = int(data["minPrice"])
        query += ' ee.cost_per_night >= %s AND'%(cost)
        count_query += ' ee.cost_per_night >= %s AND'%(cost)

    
    query = query.strip('AND')
    query = query.strip('WHERE')

    count_query = count_query.strip('AND')
    count_query = count_query.strip('WHERE')

    if data.get('sort'):
        sort_param = data.get('sort')
        if sort_param.lower() == 'sleepsmost':
            query += "ORDER BY ee.capacity DESC"
        elif sort_param.lower() == 'sleepsfewest':
            query += "ORDER BY ee.capacity ASC"
        elif sort_param.lower() == 'pricelowest':
            query += "ORDER BY ee.cost_per_night ASC"
        elif sort_param.lower() == 'pricehighest':
            query += "ORDER BY ee.cost_per_night DESC"

    query = query + ';'
    data_raw = db.engine.execute(query)
    total_results = 0
    send_data = []

    for row in data_raw:
        if data.get("features"):
            param_features = list(data.get("features"))
            param_features_lowercase = [el.lower() for el in param_features]
            hotel_features = json.loads(row["features"])
            hotel_all_features = []
            for feature_type in hotel_features:
                hotel_all_features.extend(hotel_features[feature_type])
            all_features_lowercase = [el.lower() for el in hotel_all_features]
            result = all(elem in all_features_lowercase for elem in param_features_lowercase)

            if not result:
                continue
            else:
                print("Filter features are satisfied, hence retrieving.")

        temp_hotel = {}
        temp_hotel["id"] = row["id"]
        images = json.loads(row["hotel_images"])
        temp_hotel["hotel_images"] = []
        temp_hotel["hotel_images"].append(images["entrance"][0]["image"])
        temp_hotel["hotel_images"].append(images["entrance"][1]["image"])
        temp_hotel["name"] = row["name"]
        temp_hotel["location"] = str(row["city"])+" , "+str(row["address"])
        temp_hotel["people"] = row["capacity"]
        temp_hotel["bedrooms"] = row["bedrooms"]
        temp_hotel["bathrooms"] = row["bathrooms"]
        temp_hotel["cost_per_night"] = row["cost_per_night"]
        temp_hotel["cost_per_bedroom"] = int(row["cost_per_night"])//int(row["bedrooms"])
        temp_hotel["location_info"] = [ float(row["latitude"]) , float(row["longitude"]) ]
        total_results += 1
        send_data.append(temp_hotel)


    if data.get('perPage'):
        per_page = int(data.get('perPage'))

    if data.get('page'):
        page = int(data.get('page'))

    total_pages = total_results//per_page

    if total_pages%per_page > 0 or total_pages == 0:
        total_pages += 1

    current_page_items = []
    start_index = (page-1)*per_page
    end_index = page*per_page

    if end_index >= total_results:
        current_page_items = send_data[start_index :]
    else:
        current_page_items = send_data[start_index : end_index]

    if total_results>0:
        return True, total_results, total_pages, current_page_items
    else:
        return True, 0, 1, [] 

    