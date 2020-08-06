from ..models.EntityModel import EntityModel
from ..models import db
import jwt
import datetime
from ..settings import key
from ..utils.save_data import save_changes
import json


#Function for adding to catalog data
def add_entity(data):

    #hotel_images_json = json.dumps(data["hotel_images"])
    #features_json = json.dumps(data["features"])

    print(data["features"]," are the features")
    print(data["hotel_images"]," are the image links")

    new_asset = EntityModel(name = data["name"],
                hotel_images = data["hotel_images"],
                city = data["city"],
                address = data["address"],
                capacity = data["capacity"],
                bedrooms = data["bedrooms"],
                bathrooms = data["bathrooms"],
                cost_per_night = data["cost_per_night"],
                description = data["description"],
                features = data["features"],
                home_truth_id = data["home_truth_id"],
                policy_id =  data["policy_id"],
                )


    save_changes(new_asset)
    user_id = new_asset.id

    # check if user_id is not NoneType
    if user_id:
        return True
    else:
        return False