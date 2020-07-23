from flask import request
from flask_restful import Resource, reqparse
from app.main import db
from app.main.services.entity import add_entity
import jwt
from app.main.settings import key
import datetime

# Route for Entity
class Entity(Resource):
    parser = reqparse.RequestParser()

    parser.add_argument('name', type=str,required=False)
    parser.add_argument('hotel_images', type=str,required=False)
    parser.add_argument('city', type=str,required=False)
    parser.add_argument('address', type=str,required=False)
    parser.add_argument('capacity', type=str,required=False)
    parser.add_argument('bedrooms', type=str,required=False)
    parser.add_argument('bathrooms', type=str,required=False)
    parser.add_argument('cost_per_night', type=str,required=False)
    parser.add_argument('description', type=str,required=False)
    parser.add_argument('features', type=str,required=False)
    parser.add_argument('home_truth_id', type=str,required=False)
    parser.add_argument('policy_id', type=str,required=False)


    @classmethod
    def post(self):
        data = Entity.parser.parse_args()
        print("\n\n---INSIDE POST Entity---\n")
        print(data," are the parameters passed to Entity POST")
        flag = add_entity(data)

        if flag:
            return {"status" : "success",  "message" : "Successfully added to Entity"}
        else:
            return {"status" : "failure" , "message" : "Could not add to Entity. Please try again."}
