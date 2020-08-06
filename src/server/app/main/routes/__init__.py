# import respective blueprints and flask RESTful resources
from .blueprint_test import bp
from .User import UserLogin, UserSignup, UserLogout
from .Catalog import Catalog
from .Entity import Entity
from .User_oAuth import UserOAuth
from .HotelDisplay import HotelDisplay
from .SimilarHotels import SimilarHotels
from .BookedDates import BookedDates
from .Orders import Orders
from .Payments import Payments
from flask import Flask, request, Blueprint
from flask_restful import Api

api_blueprint = Blueprint('api', __name__)
api = Api(api_blueprint)

def add_resources(app):
    """
    Method to add resources to app context
    
    Args:
        app (object): object of Flask representing the app in context
    """
    api.add_resource(UserLogin, '/login')
    api.add_resource(UserOAuth, '/ssologin')
    api.add_resource(UserSignup, '/signup')
    api.add_resource(UserLogout, '/logout')
    api.add_resource(Catalog, '/search', '/search/<location>', '/search/<location>/<page>')
    api.add_resource(HotelDisplay, '/home-listing/<hotelid>')
    api.add_resource(SimilarHotels,'/get-similar/<hotelid>')
    api.add_resource(BookedDates, '/booked-dates/<hotelid>')
    #api.add_resource(Catalog, '/search/<location>')
    api.add_resource(Entity, '/add')
    api.add_resource(Orders, '/order')
    api.add_resource(Payments, '/payment')

def register_blueprints(app):
    """
    Method to add blueprints to app context
    
    Args:
        app (object): object of Flask representing the app in context
    """
    app.register_blueprint(api_blueprint)
