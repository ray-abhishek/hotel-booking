# import respective blueprints and flask RESTful resources
from .blueprint_test import bp
from app.main import api
from app.main.routes.User import UserLogin, UserSignup, UserLogout
from app.main.routes.Catalog import Catalog
from app.main.routes.Entity import Entity
from app.main.routes.User_oAuth import UserOAuth

def add_resources(app):
    """
    Method to add resources to app context
    
    Args:
        app (object): object of Flask representing the app in context
    """
    api.add_resource(UserLogin, '/login')
    api.add_resource(UserOAuth, '/ssologin')
    #api.add_resource(LoginCallback, '/login/callback')
    api.add_resource(UserSignup, '/signup')
    api.add_resource(UserLogout, '/logout')
    api.add_resource(Catalog, '/search', '/search/<location>', '/search/<location>/<page>')
    #api.add_resource(Catalog, '/search/<location>')
    api.add_resource(Entity, '/add')

def register_blueprints(app):
    """
    Method to add blueprints to app context
    
    Args:
        app (object): object of Flask representing the app in context
    """
    app.register_blueprint(bp)
    pass
