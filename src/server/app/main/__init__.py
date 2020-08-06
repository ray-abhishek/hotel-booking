""" Creation of Flask object along with configuration based on environment name specified in the settings file"""
from datetime import datetime as dt
from flask import Flask, Blueprint, request
from flask_restful import Api
from .routes import add_resources, register_blueprints
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail, Message
from .settings import config_by_name
from .models import db



def create_app(config_name):
    """
    creates the Flask object

    Args:
        config_name (str): string to define the environment settings the Flask object will be configured with

    Returns:
        object: Flask object configured with the configuration parameters from settings based on the environment name specified
    """
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object(config_by_name[config_name])
    add_resources(app)
    register_blueprints(app)
    db.init_app(app)
    return app



