from flask import Blueprint, current_app

bp = Blueprint("public", __name__)

@bp.route("/")
def hello_world():
    current_app.logger.info(" This is info ")
    current_app.logger.warning(" This is an warning ")
    current_app.logger.error(" This is an error ")

    return "hello user"