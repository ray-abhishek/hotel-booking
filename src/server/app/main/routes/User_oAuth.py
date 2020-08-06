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
        print(data," are the parameters passed to /ssologin")
        flag, token, name = oauth_login(data)
        print(flag,token,name," flag, token, name being sent to client")
        if flag:
            return {'status': "success", 'Authorization': token, 'message': 'Login Successful', "name" : name}
        else:
            return {'status': "failure", 'message': 'Login Failed'}



"""
class LoginCallback(Resource):

    @classmethod
    def get(self):
        # Get authorization code Google sent back to you
        code = request.args.get("code")

        # Find out what URL to hit to get tokens that allow you to ask for
    # things on behalf of a user
    google_provider_cfg = get_google_provider_cfg()
    token_endpoint = google_provider_cfg["token_endpoint"]

    # Prepare and send a request to get tokens! Yay tokens!
    token_url, headers, body = client.prepare_token_request(
        token_endpoint,
        authorization_response=request.url,
        redirect_url=request.base_url,
        code=code
    )
    token_response = requests.post(
        token_url,
        headers=headers,
        data=body,
        auth=(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET),
    )

    # Parse the tokens!
    client.parse_request_body_response(json.dumps(token_response.json()))

    # Now that you have tokens (yay) let's find and hit the URL
    # from Google that gives you the user's profile information,
    # including their Google profile image and email
    userinfo_endpoint = google_provider_cfg["userinfo_endpoint"]
    uri, headers, body = client.add_token(userinfo_endpoint)
    userinfo_response = requests.get(uri, headers=headers, data=body)

    # You want to make sure their email is verified.
    # The user authenticated with Google, authorized your
    # app, and now you've verified their email through Google!
    #if userinfo_response.json().get("email_verified"):
    unique_id = userinfo_response.json()["sub"]
    users_email = userinfo_response.json()["email"]
    picture = userinfo_response.json()["picture"]
    users_name = userinfo_response.json()["given_name"]
"""