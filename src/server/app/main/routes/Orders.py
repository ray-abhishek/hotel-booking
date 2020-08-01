from flask import request
from flask_restful import Resource, reqparse
from app.main import db
from app.main.services.order import create_order
import jwt
from app.main.settings import key
from app.main.utils.auth_helper import get_email_from_token
from app.main.utils.validate import validate_inputs
import datetime

# Route for Entity
class Orders(Resource):
    parser = reqparse.RequestParser()

    parser.add_argument('name', type=str,required=True, help="Please enter a name in order to continue")
    parser.add_argument('email', type=str,required=True, help="Please enter an email in order to continue")
    parser.add_argument('message', type=str,required=False)
    parser.add_argument('phone_number', type=str,required=False)
    parser.add_argument('order_amount', type=str,required=True,help="Order Amount is missing. Please try again.")
    parser.add_argument('order_currency', type=str,required=False)
    parser.add_argument('order_receipt', type=str,required=True, help="Order Receipt is missing. Please try again.")
    parser.add_argument('book_from', type=str,required=True, help="Please select an arrival date in order to continue")
    parser.add_argument('book_to', type=str,required=True, help="Please select an departure date in order to continue")
    parser.add_argument('hotel_id', type=str,required=True, help="Invalid Hotel ID. Please try again.")

    @classmethod
    def post(self):
        auth_token = request.headers.get('Authorization')

        if not auth_token:
            return {"status" : "failure" , "message" : "Please login in order to book hotel."}

        account_email = get_email_from_token(auth_token)
        data = Orders.parser.parse_args()
        data["account_email"] = account_email
        print(data," are the parameters passed to Orders POST")
        valid_inputs_flag, error_message = validate_inputs(data)

        if valid_inputs_flag == False:
            return { "status" : "failure" , "message" : error_message}

        print("\n\n---INSIDE POST Orders - after input validation ---\n")
        
        print(data," are the parameters passed to Orders POST")
        flag, order_info, already_booked, user_unregistered = create_order(data)

        print(order_info," is the order_info being sent to client")
        
        if user_unregistered == True:
            return {
                "status" : "failure" , "message" : "Please login in order to book hotel."
            }

        if already_booked == True:
            return {"status" : "failure" , "message" : "Hotel is unavailable for the dates."}

        if flag:
            return {"status" : "success",  "data" : order_info}
        else:
            return {"status" : "failure" , "message" : "There was an issue while creating an order. Our team is on it and we'll get back to you with a solution."}

