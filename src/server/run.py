import os
import unittest
import json
from app.main import create_app, db
from app.main.settings import key
from app.main.models import *
from flask_cors import CORS

from flask import Flask, redirect, request, url_for


app = create_app('dev')
CORS(app)


@app.route("/")
def Home():
    return "Welcome Home"

if __name__ == "__main__":
    app.run()


