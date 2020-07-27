from ..models.EntityModel import EntityModel
from app.main import db
import jwt
import datetime
from app.main.settings import key
from ..utils.save_data import save_changes
import json 

#Function for fetching catalog data
def get_catalog_data(data):

    per_page = 10
    
    query = 'SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.cost_per_night, ee.features FROM hotels as ee WHERE'

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
            query += "ORDER BY ee.capacity DESC"

    if data.get('perPage'):
        per_page = int(data.get('perPage'))

    if data.get('page'):
        page = int(data.get('page'))
        offset = (page-1)*per_page
        current_items = page*per_page
        query = query + " LIMIT %d, %d"%(offset, per_page)
    else:
        query = query + " LIMIT %d"%(per_page)

    if data.get('feature'):
        print(data.get('feature')," are the features sent as url params")
    
    query = query + ';'
    count_query = count_query + ';'
    count_raw = db.engine.execute(count_query)
    total_results = 0
    for row in count_raw:
        total_results = row[0]
        total_pages = int(row[0]/per_page)
        if row[0]%per_page > 0:
            total_pages = total_pages + 1

    data_raw = db.engine.execute(query)
    
    send_data = []

    for row in data_raw:
        
        if data.get("feature"):
            param_features = list(data.get("feature"))
            param_features_lowercase = [el.lower() for el in param_features]
            print(param_features," are features sent in params")
            hotel_features = json.loads(row["features"])
            print(hotel_features," are the hotel features in json")
            hotel_all_features = []
            for feature_type in hotel_features:
                hotel_all_features.extend(hotel_features[feature_type])
            print(hotel_all_features, " are all the features of hotel in a single array")
            all_features_lowercase = [el.lower() for el in hotel_all_features]
            result = all(elem in all_features_lowercase for elem in param_features_lowercase)
            print(result," is result of feature check")
            if not result:
                continue
            else:
                print("filter features are satisfied")

        temp_hotel = {}
        temp_hotel["id"] = row["id"]
        #print(row["hotel_images"]," raw hotel images")
        #print(json.loads(row["hotel_images"])," json hotel images")
        images = json.loads(row["hotel_images"])
        #print(images," are entrance images")
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
        send_data.append(temp_hotel)


    if len(send_data)>0:
        return True, total_results, total_pages, send_data
    else:
        return True, 0, 1, []











"""

if data.get('page'):
        page = int(data.get('page'))
        offset = (page-1)*per_page
        current_items = page*per_page
        query = query + "ORDER BY ee.cost_per_night ASC LIMIT %d, %d"%(offset, per_page)
    else:
        query = query + "ORDER BY ee.cost_per_night ASC LIMIT %d"%(per_page)

"""