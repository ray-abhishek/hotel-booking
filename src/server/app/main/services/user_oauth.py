from flask_login import UserMixin
from ..models.AuthUserModel import AuthUserModel
from ..utils.save_data import save_changes
from app.main import db


def getAuthUser(user_id):
        
    user = AuthUserModel.query.filter_by(AuthUserModel.id == user_id).first()
    return user


def createAuthUser(user_id, name, email, profile_pic_):
        
    new_asset = AuthUserModel(id = user_id, 
                            name = name,
                            email = email,
                            profile_pic = profile_pic_)
                            
    save_changes(new_asset)

        
        