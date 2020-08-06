from ..models.EntityModel import EntityModel
from ..models.BookingModel import BookingModel
from ..models.OrderModel import OrderModel
from ..models.UserModel import UserModel
from ..models import db
import jwt
import datetime
from ..settings import key
from ..utils.save_data import save_changes
import json
import razorpay
import hmac
import hashlib
from flask import current_app as app
from flask_mail import Mail, Message



#Function for adding to catalog data
def validate_payment(data):
    with app.app_context():
        #hotel_images_json = json.dumps(data["hotel_images"])
        #features_json = json.dumps(data["features"])
        mail = Mail(app)
        razorpay_payment_id = data["razorpay_payment_id"]
        razorpay_order_id = data["razorpay_order_id"]
        razorpay_signature = data["razorpay_signature"]   
        order_id = data["order_id"]
        #return True, {"message": "success"}

    

        order = OrderModel().query.filter(OrderModel.id == order_id).first()

        if not order:
            print(order_id," <--- order_id was not found in Order Table")
            rollback_booking(booking)
            rollback_order(order)
            return False, {}, True, False, False
        else:
            print(order.id, " is the order ID as per Order Table")

        user = UserModel().query.filter(UserModel.id == order.user_id).first()

        if not user:
            print(order.user_id," <--- user_id of order not found")
            rollback_booking(booking)
            rollback_order(order)
            return False, {}, False, True, False
        else:
            print(user.email," <--- is the email id of user")

        booking = BookingModel().query.filter(BookingModel.id == order.booking_id).first()

        if not booking:
            print(booking_id," <--- booking_id was not found in booking Table")
            rollback_booking(booking)
            rollback_order(order)
            return False, {}, False, False, True
        else:
            print(booking.id, " is the booking ID as per booking Table")

        secret = "VGcpAjSN1901I9v8uTTIOx0i"

        msg = "{}|{}".format(order_id, razorpay_payment_id)
    
        generated_signature = hmac.new(key=secret, msg=msg, digestmod=hashlib.sha256).hexdigest()


        print(generated_signature," generated signature")
        print(razorpay_signature," is razorpay signature")
    
        if generated_signature == razorpay_signature:
            """
            msg = Message("Booking Confirmation", sender="abhi.22.ray@gmail.com",recipients = [user.email])
            msg.body = "Congratulations! Your booking has been confirmed. In case of any concerns, please reach us at +91 9338289938."
            mail.send(msg)
            """
            update_booking_status_query = 'UPDATE bookings SET status="CONFIRMED" WHERE id = %s;'%(booking.id)

            db.engine.execute(update_booking_status_query)

            update_payment_status_query = 'UPDATE orders SET payment_status="PAID" WHERE id = "%s";'%(order.id)

            db.engine.execute(update_payment_status_query)

            update_order_status_query = 'UPDATE orders SET order_status="CONFIRMED" WHERE id = "%s";'%(order.id)

            db.engine.execute(update_order_status_query)

            return True, { "order_id" : order.id, "amount_paid" : order.amount }, False, False, False
        else:
            rollback_booking(booking)
            rollback_order(order)
            return False, {}, False, False, False

    
    
def rollback_booking(booking):

    rollback_booking_query = 'DELETE FROM bookings WHERE id = %s;'%(booking.id)

    db.engine.execute(rollback_booking_query)



def rollback_order(order):

    rollback_order_query = 'DELETE FROM orders WHERE id = "%s";'%(order.id)

    db.engine.execute(rollback_order_query)


