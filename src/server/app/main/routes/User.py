from flask import request
from flask_restful import Resource, reqparse
from app.main import db
from app.main.services.user_auth import user_login, user_signup
import jwt
from app.main.settings import key
import datetime
from app.main.utils.auth_helper import token_validate

# Route for User login
class UserLogin(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('password', type=str,required=True, help="Password sent is empty/incorrect")
    parser.add_argument('email', type=str,required=True, help="Email sent is empty/incorrect")

    @classmethod
    def post(self):
        data=UserLogin.parser.parse_args()
        print("\n\n----INSIDE UserLogin----\n\n")
        print(data," are the parameters passed to /login")
        flag, token, name = user_login(data)
        print(flag,token,name," flag, token, name being sent to client")
        if flag:
            return {'status': "success", 'Authorization': token, 'message': 'Login Successful', "name" : name}
        else:
            return {'status': "failure", 'message': 'Login Failed'}


# Route for User Signup
class UserSignup(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('name', type=str,required=True, help="Name sent is empty/incorrect")
    parser.add_argument('password', type=str,required=True, help="Password sent is empty/incorrect")
    parser.add_argument('email', type=str,required=True, help="Email sent is empty/incorrect")

    @classmethod
    def post(self):
        data=UserSignup.parser.parse_args()
        print("\n\n----INSIDE UserSignup----\n\n")
        print(data," are the parameters passed to /signup")
        
        flag = user_signup(data)

        if flag:
            return {'status': "success", 'message': 'Successfully registered'}
        else:
            return {'status': "failure", 'message': 'Registration Failed'}



# Route for User Logout
class UserLogout(Resource):
    parser = reqparse.RequestParser()

    @classmethod
    def get(self):
        auth_token = request.headers.get('Authorization')
        print("\n\n----INSIDE UserLogout----\n\n")
        print("Authorization Token is ",auth_token)
        flag_token_valid, token_data = token_validate(auth_token)

        if flag_token_valid:
            return {'status': "success", 'message': 'Token Deactivated'}
        else:
            return {'status': "failure", 'message': 'Token Deactivation Failed'}



