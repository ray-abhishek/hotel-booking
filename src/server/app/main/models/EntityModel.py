from . import db
import datetime

class EntityModel(db.Model):

    __tablename__ = 'hotels'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=True, default=datetime.datetime.now())
    name = db.Column(db.String(70), nullable=False)
    hotel_images = db.Column(db.Text, nullable=False)
    city = db.Column(db.String(70), nullable=False)
    address = db.Column(db.Text, nullable=False)
    capacity = db.Column(db.Integer, nullable=False)
    bedrooms = db.Column(db.Integer, nullable=False)
    bathrooms = db.Column(db.Integer, nullable=False)
    cost_per_night = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=True)
    features = db.Column(db.Text, nullable=False)
    home_truth_id = db.Column(db.Integer, db.ForeignKey('home_truths.id'), nullable=False)
    policy_id = db.Column(db.Integer, db.ForeignKey('policy.id'), nullable=False)
    latitude = db.Column(db.String(70), nullable=False)
    longitude = db.Column(db.String(70), nullable=False)
    
    
    
    
