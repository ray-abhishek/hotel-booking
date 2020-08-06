from . import db
import datetime

class AuthUserModel(db.Model):
    
    __tablename__ = 'authusers'

    id = db.Column(db.String(255), primary_key=True)
    name = db.Column(db.String(70), nullable=False)
    email = db.Column(db.String(70), nullable=False)
    profile_pic = db.Column(db.String(70), nullable=False)
