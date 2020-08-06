from flask import request
from flask_restful import Resource, reqparse
from ..models import db
from ..services.get_similar_data import get_similar_data
import jwt
from ..settings import key
import datetime

# Route for HotelDisplay
class SimilarHotels(Resource):
    parser = reqparse.RequestParser()

    @classmethod
    def get(self, hotelid=None):
        data = SimilarHotels.parser.parse_args()
        print("\n\n---INSIDE GET SimilarHotels---\n")
        #data["page"] = page
        print(hotelid," is location")
        if hotelid:
            data["hotelid"] = hotelid
        print(data," are the parameters passed to SimilarHotels")
        #params = request.args
        #print(params," are params sent for fetching HotelDisplay data")
        flag, similar_data = get_similar_data(data)

        print(similar_data," is SimilarHotels data being sent to client")
        if flag:
            return {"status" : "success", "data" : similar_data}
        else:
            return {"status" : "failure" , "message" : "Could not fetch similar hotels data. Please try again."}
