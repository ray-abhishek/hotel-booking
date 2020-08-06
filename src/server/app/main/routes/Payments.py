from flask import request
from flask_restful import Resource, reqparse
from ..models import db
from ..services.payment import validate_payment
import jwt
from ..settings import key
import datetime

# Route for Entity
class Payments(Resource):
    parser = reqparse.RequestParser()

    parser.add_argument('order_id', type=str,required=True)
    parser.add_argument('razorpay_payment_id', type=str,required=True)
    parser.add_argument('razorpay_order_id', type=str,required=True)
    parser.add_argument('razorpay_signature', type=str,required=True)
    parser.add_argument('hotel_id', type=str,required=False)
    parser.add_argument('currency',type=str, required=False)


    @classmethod
    def post(self):
        data = Payments.parser.parse_args()
        print("\n\n---INSIDE POST Payments---\n")
        print(data," are the parameters passed to Payments POST")
        flag, confirmed_data, order_not_found, user_not_found, booking_not_found = validate_payment(data)
        print(confirmed_data," is payment confirmation data being sent to client")

        if order_not_found:
            return {"status" : "failure" , "message" : "Invalid Order ID. Please try again or reach us at +91 9438838292 for assistance."}

        if user_not_found:
            return {"status" : "failure" , "message" : "Invalid User ID. Please try again or reach us at +91 9438838292 for assistance."}

        if booking_not_found:
            return {"status" : "failure" , "message" : "Invalid Booking ID. Please try again or reach us at +91 9438838292 for assistance."}
        
        if flag:
            return {"status" : "success",  "message" : "Payment Successful.", "data" : confirmed_data}
        else:
            return {"status" : "failure" , "message" : "Payment failed. Please try again or reach us at +91 9438838292 for assistance."}

