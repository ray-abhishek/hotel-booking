from ..models.EntityModel import EntityModel
from ..models.BookingModel import BookingModel
from ..models import db
import jwt
from ..settings import key
from ..utils.save_data import save_changes
import json
from datetime import datetime, timedelta, date

#Function for fetching hotel booked data
def get_booked_data(data):

    query = 'SELECT checkin_dt, checkout_dt FROM bookings where hotel_id = %s;'%(data["hotelid"])

    query = query + ';'

    data_raw = db.engine.execute(query)

    booked_dates = []
    
    for row in data_raw:
        print(row["checkin_dt"], row["checkout_dt"],"  are row['checkin_dt'], row['checkout_dt']")
        temp_dates = getDates(row["checkin_dt"], row["checkout_dt"])
        print(temp_dates," are temp_dates")
        booked_dates.extend(temp_dates)

    offset_days = {}
    offset_days["ahead"] = []
    offset_days["before"] = []
    for dt in booked_dates:
        formatted_dt = datetime.strptime(dt, '%Y-%m-%d')
        formatted_dt = datetime.date(formatted_dt)

        todays_date = date.today()
        if formatted_dt >= todays_date:
            delta = formatted_dt - todays_date
            offset_days["ahead"].append(delta.days)
        else:
            delta = todays_date - formatted_dt
            offset_days["before"].append(delta.days)

    if len(offset_days["ahead"])>0 or len(offset_days["before"])>0:
        return True, offset_days
    else:
        return False, {}



def getDates(start_dt, end_dt):
    result_arr = []
    for dt in daterange(start_dt, end_dt):
        result_arr.append(dt.strftime("%Y-%m-%d"))
    return result_arr

def daterange(date1, date2):
    for n in range( int((date2 - date1).days) + 1 ):
        yield date1 + timedelta(n)



