import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'my_precious_secret_key')
    DEBUG = False

class DevelopmentConfig(Config):

    # SQLALCHEMY_DATABASE_URI = 'mysql://<user>:<password>@<host>:<port>/<database_name>'

    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'mysql://admin:Blacksnow121@database-ticketmanagement.cxsn3cjqh9gg.ap-south-1.rds.amazonaws.com/onefinestay'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    ENV = 'development'
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 465
    MAIL_USE_SSL = True
    MAIL_USERNAME = 'abhi.22.ray@gmail.com'
    MAIL_PASSWORD = 'Blackbeans@121'

class TestingConfig(Config):
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'mysql://root:Bluejibble@123@localhost/onefinestay'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class ProductionConfig(Config):
    DEBUG = False

config_by_name = dict(
    dev=DevelopmentConfig,
    test=TestingConfig,
    prod=ProductionConfig
)

key = Config.SECRET_KEY