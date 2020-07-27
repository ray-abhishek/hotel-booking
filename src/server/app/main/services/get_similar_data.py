from ..models.EntityModel import EntityModel
from app.main import db
import jwt
import datetime
from app.main.settings import key
from ..utils.save_data import save_changes
import json


#Function for fetching similar hotels data
def get_similar_data(data):

    query = EntityModel().query.filter(EntityModel.id == data["hotelid"]).first()

    cheaper_options_query = "SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night<=%s and ee.id!=%s ORDER BY ee.cost_per_night DESC LIMIT 0,2"%(query.cost_per_night, query.id)

    final_cheaper_options_query = cheaper_options_query + ';'

    cheaper_options = db.engine.execute(final_cheaper_options_query)
    similar_options = []
    cheaper_count = 0
    
    for row in cheaper_options:
        cheaper_count+=1
        print("\n\n",row," row 1")
        similar_options.append(row)
    
    get_costly_only = False
    costlier_options_query = "SELECT * FROM hotels where hotels.id = 999"
    if cheaper_count==0:
        costlier_options_query = "SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night>%s and ee.id!=%s ORDER BY ee.cost_per_night ASC LIMIT 0,3"%(query.cost_per_night, query.id)
        get_costly_only = True
    elif cheaper_count==1:
        costlier_options_query = "SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night>%s and ee.id!=%s ORDER BY ee.cost_per_night ASC LIMIT 0,2"%(query.cost_per_night, query.id)
    elif cheaper_count==2:
        costlier_options_query = "SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night>%s and ee.id!=%s ORDER BY ee.cost_per_night ASC LIMIT 0,1"%(query.cost_per_night, query.id)

    final_costlier_options_query = costlier_options_query + ';'

    costlier_options = db.engine.execute(final_costlier_options_query)

    costlier_count = 0 
    for row in costlier_options:
        costlier_count+=1
        print("\n\n",row," row 2")
        similar_options.append(row)



    if costlier_count==0 and get_costly_only == False:
        cheaper_3_query = "SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night<=%s and ee.id!=%s ORDER BY ee.cost_per_night DESC LIMIT 0,3"%(query.cost_per_night, query.id)
        similar_options = []

        final_cheaper_3_query = cheaper_3_query + ';'

        cheaper_3_options = db.engine.execute(final_cheaper_3_query)

        for row in cheaper_3_options:
            print("\n\n",row," row 3\n\n")
            similar_options.append(row)

    """
    fetch_similar_data_query = "(SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night<=%s and ee.id!=%s ORDER BY ee.cost_per_night DESC LIMIT 0,2) UNION ALL (SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features FROM hotels as ee WHERE ee.cost_per_night>=%s and ee.id!=%s ORDER BY ee.cost_per_night ASC LIMIT 0,1)"%(query.cost_per_night, query.id, query.cost_per_night, query.id)
    """
    

    #data_raw = db.engine.execute(final_query)

    send_data = []

    for row in similar_options:
        print(row," is row of similar_data query")
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


