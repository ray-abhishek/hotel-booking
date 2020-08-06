from ..models.EntityModel import EntityModel
from ..models import db
import jwt
import datetime
from ..settings import key
from ..utils.save_data import save_changes
import json


#Function for fetching similar hotels data
def get_similar_data(data):

    query = EntityModel().query.filter(EntityModel.id == data["hotelid"]).first()

    count_hotels_per_location_query = 'SELECT COUNT(id) FROM hotels WHERE hotels.city = "%s";'%(query.city)

    raw_data = db.engine.execute(count_hotels_per_location_query)

    for row in raw_data:
        print(row," is row of raw_data")
        count = row[0]
        print(count)
    
    similar_options = []

    print("\n\n query is \n ---- \n ",query.id,query.city)

    if count<3:
        #print("count<3 is TRUE")
        same_location_options = get_same_locations_data_count(count, query)
        if len(same_location_options) < count:
            other_location_options = get_other_locations_data(3, query)
        else:
            other_location_options = get_other_locations_data(3-count, query)
        #print(same_location_options, " -------------same_location_options")
        #print(other_location_options, " ------------other_location_options")
        similar_options = same_location_options
        similar_options.extend(other_location_options)

    elif count>=3:
        #print("count>=3 is TRUE")
        same_locations_options = get_same_locations_data(query)
        #print(same_locations_options, " -------------same_locations_options")
        similar_options = same_locations_options
    
    
    print(similar_options," are the similar options")

    send_data = []

    for row in similar_options:
        #print(row," is row of similar_data query")
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
        return True, send_data
    else:
        return False, []







def get_same_locations_data(query):

    cheaper_options_query = 'SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night<=%s and ee.id!=%s AND ee.city = "%s" ORDER BY ee.cost_per_night DESC LIMIT 0,2'%(query.cost_per_night, query.id, query.city)

    final_cheaper_options_query = cheaper_options_query + ';'

    cheaper_options = db.engine.execute(final_cheaper_options_query)
    similar_options = []
    cheaper_count = 0
    
    for row in cheaper_options:
        cheaper_count+=1
        print("\n\n",row," row 1")
        similar_options.append(row)
    
    get_costly_only = False
    costlier_options_query = 'SELECT * FROM hotels where hotels.id = 999'
    if cheaper_count==0:
        costlier_options_query = 'SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night>%s and ee.id!=%s AND ee.city = "%s" ORDER BY ee.cost_per_night ASC LIMIT 0,3'%(query.cost_per_night, query.id, query.city)
        get_costly_only = True
    elif cheaper_count==1:
        costlier_options_query = 'SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night>%s and ee.id!=%s AND ee.city = "%s" ORDER BY ee.cost_per_night ASC LIMIT 0,2'%(query.cost_per_night, query.id, query.city)
    elif cheaper_count==2:
        costlier_options_query = 'SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night>%s and ee.id!=%s  AND ee.city = "%s"ORDER BY ee.cost_per_night ASC LIMIT 0,1'%(query.cost_per_night, query.id, query.city)

    final_costlier_options_query = costlier_options_query + ';'

    costlier_options = db.engine.execute(final_costlier_options_query)

    costlier_count = 0 
    for row in costlier_options:
        costlier_count+=1
        print("\n\n",row," row 2")
        similar_options.append(row)



    if costlier_count==0 and get_costly_only == False:
        cheaper_3_query = 'SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night<=%s and ee.id!=%s AND ee.city = "%s" ORDER BY ee.cost_per_night DESC LIMIT 0,3'%(query.cost_per_night, query.id, query.city)
        similar_options = []

        final_cheaper_3_query = cheaper_3_query + ';'

        cheaper_3_options = db.engine.execute(final_cheaper_3_query)

        for row in cheaper_3_options:
            print("\n\n",row," row 3\n\n")
            similar_options.append(row)


    return similar_options



def get_same_locations_data_count(count, query):

    print("SAME LOCATION DATA for count = ",count)

    cheaper_options_query = 'SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night<=%s and ee.id!=%s AND ee.city = "%s" ORDER BY ee.cost_per_night DESC LIMIT 0,%s'%(query.cost_per_night, query.id, query.city, count)


    final_cheaper_options_query = cheaper_options_query + ';'

    cheaper_options = db.engine.execute(final_cheaper_options_query)
    similar_options = []
    cheaper_count = 0
    
    for row in cheaper_options:
        cheaper_count+=1
        print("\n\n",row," row in cheaper at count ", cheaper_count)
        similar_options.append(row)

    if cheaper_count<=count:
        costlier_options_query = 'SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night>%s and ee.id!=%s AND ee.city = "%s" ORDER BY ee.cost_per_night ASC LIMIT 0,%s'%(query.cost_per_night, query.id, query.city, count)

        final_costlier_options_query = costlier_options_query + ';'

        costlier_options = db.engine.execute(final_costlier_options_query)
        similar_options = []
        costlier_count = 0
    
        for row in cheaper_options:
            costlier_count+=1
            print("\n\n",row," row in costlier at count ",costlier_count)
            similar_options.append(row)

    return similar_options





def get_other_locations_data(count, query):
    
    print("OTHER LOCATION DATA for count = ",count)

    cheaper_options_query = 'SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night<=%s and ee.id!=%s AND ee.city != "%s" ORDER BY ee.cost_per_night DESC LIMIT 0,%s'%(query.cost_per_night, query.id, query.city, count)


    final_cheaper_options_query = cheaper_options_query + ';'

    cheaper_options = db.engine.execute(final_cheaper_options_query)
    similar_options = []
    cheaper_count = 0
    
    for row in cheaper_options:
        cheaper_count+=1
        print("\n\n",row," row in cheaper at count ", cheaper_count)
        similar_options.append(row)

    if cheaper_count<count:
        costlier_options_query = 'SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night>%s and ee.id!=%s AND ee.city != "%s" ORDER BY ee.cost_per_night ASC LIMIT 0,%s'%(query.cost_per_night, query.id, query.city, count)

        final_costlier_options_query = costlier_options_query + ';'

        costlier_options = db.engine.execute(final_costlier_options_query)
        similar_options = []
        costlier_count = 0
    
        for row in cheaper_options:
            costlier_count+=1
            print("\n\n",row," row in costlier at count ",costlier_count)
            similar_options.append(row)

    return similar_options






"""
fetch_similar_data_query = "(SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms,ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night<=%s and ee.id!=%s ORDER BY eecost_per_night DESC LIMIT 0,2) UNION ALL (SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, eebathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night>=%s and ee.id!=%s ORDER BY eecost_per_night ASC LIMIT 0,1)"%(query.cost_per_night, query.id, query.cost_per_night, query.id)
"""

#data_raw = db.engine.execute(final_query)
