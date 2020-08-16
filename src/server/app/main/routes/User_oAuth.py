# Python standard libraries
import json
import os
from flask import request
from flask_restful import Resource, reqparse
from ..models import db
from ..services.user_oauth import oauth_login
import jwt
from ..settings import key
import datetime

# Route for User login
class UserOAuth(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('email', type=str,required=True)
    parser.add_argument('name', type=str,required=True)
    parser.add_argument('googleId', type=str,required=True)
    parser.add_argument('imageUrl', type=str,required=False)

    @classmethod
    def post(self):
        data=UserOAuth.parser.parse_args()
        print("\n\n----INSIDE UserOAuth----\n\n")

        flag, token, name = oauth_login(data)
        print(flag,token,name," flag, token, name being sent to client")
        if flag:
            return {'status': "success", 'Authorization': token, 'message': 'Login Successful', "name" : name}
        else:
            return {'status': "failure", 'message': 'Login Failed'}



