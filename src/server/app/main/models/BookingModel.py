from . import db
import datetime

class BookingModel(db.Model):
    
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=True, default=datetime.datetime.now())
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotels.id'), nullable=False)
    checkin_dt = db.Column(db.DateTime(timezone=True), nullable=True)
    checkout_dt = db.Column(db.DateTime(timezone=True), nullable=True)
    status = db.Column(db.String(70), nullable=True)








