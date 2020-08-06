import jwt
from ..settings import key
import datetime

#This checks if the JWT Auth_Token is valid or not
def token_validate(auth_token):
    
    token_data = jwt.decode(auth_token, key, algorithm="HS256")

    if datetime.datetime.strptime(token_data['exp_datetime'], '%Y-%m-%d %H:%M:%S.%f') >= datetime.datetime.utcnow():
        return True, token_data 
    else:
        return False, token_data

#This extracts the email from the JWT Auth_Token
def get_email_from_token(auth_token):

    token_data = jwt.decode(auth_token, key, algorithm="HS256")
    return token_data['email']