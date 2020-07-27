from flask import request
from flask_restful import Resource, reqparse
from app.main import db
from app.main.services.hotel_display import get_hotel_data
import jwt
from app.main.settings import key
import datetime

# Route for HotelDisplay
class HotelDisplay(Resource):
    parser = reqparse.RequestParser()

    @classmethod
    def get(self, hotelid=None):
        data = HotelDisplay.parser.parse_args()
        print("\n\n---INSIDE GET HotelDisplay---\n")
        #data["page"] = page
        print(hotelid," is location")
        if hotelid:
            data["hotel_id"] = hotelid
        print(data," are the parameters passed to HotelDisplay")
        #params = request.args
        #print(params," are params sent for fetching HotelDisplay data")
        flag, hotel_data = get_hotel_data(data)
        print(hotel_data," is hotel data being sent to client")
        if flag:
            return {"status" : "success", "data" : hotel_data}
        else:
            return {"status" : "failure" , "message" : "Could not fetch hotel data. Please try again."}



