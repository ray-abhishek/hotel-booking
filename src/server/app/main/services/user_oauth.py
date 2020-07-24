from ..models.UserModel import UserModel
from ..models.AuthUserModel import AuthUserModel
from app.main import db
import jwt
import datetime
from app.main.settings import key
from ..utils.save_data import save_changes

#Function for login of user
def oauth_login(data):
    
    data_raw=UserModel().query.filter(UserModel.email == data["email"]).first()

    flag=False

    # check if data_raw is NoneType. 
    if not data_raw:

        new_asset = AuthUserModel(id = data["googleId"],
                            name = data['name'],
                            email = data['email'],
                            profile_pic = data['imageUrl']
                            )

        save_changes(new_asset)

        new_asset = UserModel(name = data['name'],
                            email = data['email'],
                            )


        save_changes(new_asset)
        user_id = new_asset.id

        
    data_raw=UserModel().query.filter(UserModel.email == data["email"]).first()


    # check if data_raw is not NoneType
    if data_raw:
        payload={
            "email":data["email"],
            "created_at":str(datetime.datetime.utcnow()),
            "exp_datetime":str(datetime.datetime.utcnow() + datetime.timedelta(days=1))
        }

        token = jwt.encode(payload,key,algorithm="HS256")
        
        return True, token.decode(), data_raw.name

    else:
        return False, "", ""
        
        