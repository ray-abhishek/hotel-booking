from flask import request
from flask_restful import Resource, reqparse
from app.main import db
from app.main.services.order import create_order
import jwt
from app.main.settings import key
import datetime

# Route for Entity
class Orders(Resource):
    parser = reqparse.RequestParser()

    parser.add_argument('order_amount', type=str,required=False)
    parser.add_argument('order_currency', type=str,required=False)
    parser.add_argument('order_receipt', type=str,required=False)
    parser.add_argument('book_from', type=str,required=False)
    parser.add_argument('book_to', type=str,required=False)
    parser.add_argument('hotel_id', type=str,required=False)

    @classmethod
    def post(self):
        data = Orders.parser.parse_args()
        print("\n\n---INSIDE POST Orders---\n")
        print(data," are the parameters passed to Orders POST")
        flag, order_info = create_order(data)

        if flag:
            return {"status" : "success",  "data" : order_info}
        else:
            return {"status" : "failure" , "message" : "Could not create a Order. Please try again."}
