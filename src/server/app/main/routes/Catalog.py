from flask import request
from flask_restful import Resource, reqparse
from ..models import db
from ..services.catalog import get_catalog_data
import jwt
from ..settings import key
import datetime

# Route for Catalog
class Catalog(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('arrivalDate', type=str,required=False)
    parser.add_argument('departureDate', type=str,required=False)
    parser.add_argument('sleeps', type=str,required=False)
    parser.add_argument('perPage', type=str,required=False)
    parser.add_argument('sort', type=str,required=False)
    parser.add_argument('page', type=str,required=False)
    parser.add_argument('features', type=str,required=False, action='append')
    parser.add_argument('maxPrice', type=str,required=False)
    parser.add_argument('minPrice', type=str,required=False)


    @classmethod
    def get(self, location=None):
        data = Catalog.parser.parse_args()
        print("\n\n---INSIDE GET Catalog---\n")
        #data["page"] = page
        print(location," is location")
        if location:
            data["location"] = location
        print(data," are the parameters passed to Catalog")
        params = request.args
        #print(params," are params sent for fetching catalog data")
        flag, total_results, total_pages, catalog_data = get_catalog_data(data)
        print("\n\n")
        print(catalog_data," is catalog_data being sent to client")
        #print(location_info," is the location_info being sent to client")
        if flag:
            return {"status" : "success", "data" : catalog_data, "totalresults" : total_results, "totalpages" : total_pages}
        else:
            return {"status" : "failure" , "message" : "There are no hotels available for selected parameters. Please contact us at +91 9787611290. "}



