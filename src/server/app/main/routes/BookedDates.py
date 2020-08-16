from flask import request
from flask_restful import Resource, reqparse
from ..models import db
from ..services.get_booked_data import get_booked_data
import jwt
from ..settings import key
from datetime import datetime, date, timedelta

# Route for BookedDates
class BookedDates(Resource):
    parser = reqparse.RequestParser()

    @classmethod
    def get(self, hotelid=None):
        data = BookedDates.parser.parse_args()
        print("\n\n---INSIDE GET BookedDates---\n")

        if hotelid:
            data["hotelid"] = hotelid

        flag, booked_dates = get_booked_data(data)

        if flag:
            return {"status" : "success", "data" : booked_dates}
        else:
            return {"status" : "failure" , "message" : "The hotel does not have any bookings", "data" : {"ahead" : [0], "before" : []}}
