from flask import request
from flask_restful import Resource, reqparse
from app.main import db
from app.main.services.get_booked_data import get_booked_data
import jwt
from app.main.settings import key
from datetime import datetime, date, timedelta

# Route for BookedDates
class BookedDates(Resource):
    parser = reqparse.RequestParser()

    @classmethod
    def get(self, hotelid=None):
        data = BookedDates.parser.parse_args()
        print("\n\n---INSIDE GET BookedDates---\n")
        #data["page"] = page
        print(hotelid," is hotelid")
        if hotelid:
            data["hotelid"] = hotelid
        print(data," are the parameters passed to BookedDates")
        #params = request.args
        #print(params," are params sent for fetching BookedDates data")
        flag, booked_dates = get_booked_data(data)
        print(booked_dates," is hotel data being sent to client")
        if flag:
            return {"status" : "success", "data" : booked_dates}
        else:
            return {"status" : "failure" , "message" : "The hotel does not have any bookings", "data" : {"ahead" : [0], "before" : []}}
