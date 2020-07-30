from flask import request
from flask_restful import Resource, reqparse
from app.main import db
from app.main.services.payment import validate_payment
import jwt
from app.main.settings import key
import datetime

# Route for Entity
class Payments(Resource):
    parser = reqparse.RequestParser()

    parser.add_argument('order_id', type=str,required=False)
    parser.add_argument('razorpay_payment_id', type=str,required=False)
    parser.add_argument('razorpay_order_id', type=str,required=False)
    parser.add_argument('razorpay_signature', type=str,required=False)
    parser.add_argument('hotel_id', type=str,required=False)
    parser.add_argument('currency',type=str, required=False)


    @classmethod
    def post(self):
        data = Payments.parser.parse_args()
        print("\n\n---INSIDE POST Payments---\n")
        print(data," are the parameters passed to Payments POST")
        flag, confirmed_data = validate_payment(data)
        print(confirmed_data," is payment confirmation data being sent to client")
        if flag:
            return {"status" : "success",  "message" : "success", "data" : confirmed_data}
        else:
            return {"status" : "failure" , "message" : "failure"}

