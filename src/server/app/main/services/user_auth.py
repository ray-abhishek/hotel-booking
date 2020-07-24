from ..models.UserModel import UserModel
from app.main import db
import jwt
import datetime
from app.main.settings import key
from ..utils.save_data import save_changes

#Function for login of user
def user_login(data):
    
    data_raw=UserModel().query.filter(UserModel.email == data["email"]).first()

    flag=False

    # check if data_raw is not NoneType
    if data_raw:

        if data["password"] == data_raw.password:
            flag=True

        #As flag is true,generating token
        if flag:
            payload={
                "email":data["email"],
                "created_at":str(datetime.datetime.utcnow()),
                "exp_datetime":str(datetime.datetime.utcnow() + datetime.timedelta(days=1))
            }

            token = jwt.encode(payload,key,algorithm="HS256")

            return flag, token.decode(), data_raw.name
        
        else:
            return flag, "", ""
    else:
        return flag , "", ""


#Function for signup of user
def user_signup(data):
    
    new_asset = UserModel(name = data['name'],
                            email = data['email'],
                            password = data['password']
                            )


    save_changes(new_asset)
    user_id = new_asset.id

    # check if user_id is not NoneType
    if user_id:
        return True
    else:
        return False




