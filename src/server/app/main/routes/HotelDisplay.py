from flask import request
from flask_restful import Resource, reqparse
from ..models import db
from ..services.hotel_display import get_hotel_data
import jwt
from ..settings import key
import datetime

# Route for HotelDisplay
class HotelDisplay(Resource):
    parser = reqparse.RequestParser()

    @classmethod
    def get(self, hotelid=None):
        data = HotelDisplay.parser.parse_args()
        print("\n\n---INSIDE GET HotelDisplay---\n")

        if hotelid:
            data["hotel_id"] = hotelid

        flag, hotel_data = get_hotel_data(data)

        if flag:
            return {"status" : "success", "data" : hotel_data}
        else:
            return {"status" : "failure" , "message" : "Could not fetch hotel data. Please try again."}



