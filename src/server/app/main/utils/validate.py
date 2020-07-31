import jwt
from app.main.settings import key
import datetime

#This checks if the JWT Auth_Token is valid or not
def validate_inputs(params):
    
    valid_inputs_flag = True
    error_message = ""
    for key in params:
        if params[key] == None or params[key] == "" or params[key] == "null":
            valid_inputs_flag = False
            error_message = "Invalid/Empty "+ key + ". Please try again."
            break 

    return valid_inputs_flag, error_message
