import os
import unittest
import json
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from app.main import create_app, db
from app.main.settings import key
from app.main.routes import add_resources, register_blueprints
#from app.main.services.user_oauth import User
from app.main.models import *
from app.main import api, api_blueprint
from flask_cors import CORS

from flask import Flask, redirect, request, url_for


app = create_app('dev')
CORS(app)
app.app_context().push()
manager = Manager(app)
migrate = Migrate(app, db)
manager.add_command('db', MigrateCommand)




@manager.command
def run():
    """
    This method runs the flask app using manager command 
    after adding the routes using the methods in routes folder
    """
    add_resources(app)
    app.register_blueprint(api_blueprint)
    register_blueprints(app)
    app.run()

#ssl_context="adhoc"

if __name__ == "__main__":
    manager.run()





"""

from flask_login import (
    LoginManager,
    current_user,
    login_required,
    login_user,
    logout_user,
)
from oauthlib.oauth2 import WebApplicationClient
import requests


GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", "###############")
GOOGLE_CLIENT_SECRET = os.environ.get("GOOGLE_CLIENT_SECRET", "##############")
GOOGLE_DISCOVERY_URL = (
    "https://accounts.google.com/.well-known/openid-configuration"
)

# User session management setup
# https://flask-login.readthedocs.io/en/latest
login_manager = LoginManager()
login_manager.init_app(app)

# OAuth 2 client setup. We're using our Google Client ID to authenticate our app with Provider i.e Google
client = WebApplicationClient(GOOGLE_CLIENT_ID)


@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)


def get_google_provider_cfg():
    #add error handling for failed API call
    return requests.get(GOOGLE_DISCOVERY_URL).json()


@app.route("/login")
def login():
    # Find out what URL to hit for Google login
    print("\n\n----Inside /login---\n\n")
    google_provider_cfg = get_google_provider_cfg()
    authorization_endpoint = google_provider_cfg["authorization_endpoint"]

    # Use library to construct the request for Google login and provide
    # scopes that let you retrieve user's profile from Google
    request_uri = client.prepare_request_uri(
        authorization_endpoint,
        redirect_uri=request.base_url + "/callback",
        scope=["openid", "email", "profile"],
    )
    return redirect(request_uri)



@app.route("/login/callback")
def callback():
    # Get authorization code Google sent back to you
    print("\n\n----Inside /login/callback---\n\n")
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
    
    print(unique_id," is unique_id")
    print(users_email," is users_email")
    print(picture, " is picture")
    print(users_name," is users_name")

    if not getAuthUser(unique_id):
        createAuthUser(unique_id, users_name, users_email, picture)
        user = getAuthUser(unique_id)

    login_user(user)

    return redirect(url_for('index'))


"""