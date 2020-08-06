from ..models.EntityModel import EntityModel
from ..models import db
import jwt
import datetime
from ..settings import key
from ..utils.save_data import save_changes
import json


#Function for fetching hotel data
def get_hotel_data(data):

    query = 'SELECT ee.id, ee.hotel_images, ee.name, ee.city, ee.address, ee.capacity, ee.bedrooms, ee.bathrooms, ee.description, ee.cost_per_night, ee.features, ee.latitude, ee.longitude FROM hotels as ee WHERE ee.id = %s'%(data["hotel_id"])

    query = query + ';'

    data_raw = db.engine.execute(query)

    temp_hotel = {}
    
    for row in data_raw:
        print(row,"               is ROW INSIDE HOTEL DISPLAY                ")
        hotel_features = json.loads(row["features"])
        temp_hotel["families"] = []
        temp_hotel["families"].extend(hotel_features["accessibility"])
        temp_hotel["families"].extend(hotel_features["family"])
        temp_hotel["sleeps"] = []
        temp_hotel["sleeps"].append(str(row["capacity"])+" people")
        temp_hotel["sleeps"].append(str(row["bedrooms"])+" bedrooms")
        temp_hotel["sleeps"].append(hotel_features["bed_type"][0])
        temp_hotel["bathroom"] = []
        temp_hotel["bathroom"].extend(hotel_features["bathroom"])
        temp_hotel["highlights"] = []
        temp_hotel["highlights"].extend(hotel_features["room"])
        temp_hotel["amenities"] = []
        temp_hotel["amenities"].extend(hotel_features["entertaiment"])
        temp_hotel["amenities"].extend(hotel_features["kitchen"])
        temp_hotel["amenities"].extend(hotel_features["pool"])
        temp_hotel["amenities"].extend(hotel_features["property"])
        
        temp_hotel["id"] = row["id"]
        #print(row["hotel_images"]," raw hotel images")
        #print(json.loads(row["hotel_images"])," json hotel images")
        images = json.loads(row["hotel_images"])
        #print(images," are hotel images")
        temp_hotel["hotel_images"] = images
        temp_hotel["name"] = row["name"]
        temp_hotel["location"] = str(row["city"])+" , "+str(row["address"])
        description_content = json.loads(row["description"])
        #print(description_content," is the description content")
        temp_hotel["description"] = []
        temp_hotel["description"].append(description_content["title"])
        temp_hotel["description"].extend(description_content["description"])
        temp_hotel["people"] = row["capacity"]
        temp_hotel["bedrooms"] = row["bedrooms"]
        temp_hotel["bathrooms"] = row["bathrooms"]
        temp_hotel["cost_per_night"] = row["cost_per_night"]
        temp_hotel["cost_per_bedroom"] = int(row["cost_per_night"])//int(row["bedrooms"])
        temp_hotel["location_info"] = []
        temp_hotel["location_info"].append(row["latitude"])
        temp_hotel["location_info"].append(row["longitude"])

    if len(temp_hotel)>0:
        return True, temp_hotel
    else:
        return False, 0




