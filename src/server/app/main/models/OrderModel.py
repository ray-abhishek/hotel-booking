from .. import db
import datetime

class OrderModel(db.Model):
    
    __tablename__ = 'orders'

    id = db.Column(db.String(255), primary_key=True)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=True, default=datetime.datetime.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    booking_id = db.Column(db.Integer, db.ForeignKey('bookings.id'), nullable=False)
    payment_id = db.Column(db.String(255), nullable=True)
    payment_status = db.Column(db.String(100), nullable=True)
    order_status = db.Column(db.String(100), nullable=True)
    description = db.Column(db.Text, nullable=True)
    currency = db.Column(db.String(50), nullable=True)
    receipt = db.Column(db.String(100), nullable=True)
    amount = db.Column(db.Float, nullable=False)
    phone_number = db.Column(db.String(100), nullable=True)