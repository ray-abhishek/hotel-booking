from .. import db
import datetime

class UserModel(db.Model):
    
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=True, default=datetime.datetime.now())
    name = db.Column(db.String(70), nullable=False)
    email = db.Column(db.String(70), nullable=False)
    password = db.Column(db.String(255), nullable=True)