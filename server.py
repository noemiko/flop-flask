#!/usr/bin/env python3

import os
import io
import json
import time
from datetime import datetime
from time import localtime, strftime
from flask import jsonify
from flask import Flask, render_template, make_response
from flask import request

app = Flask(__name__)
app.config['DEBUG'] = True

@app.route("/",)
def index():
    return render_template('index.html')

@app.route("/get_data", methods=['GET'])
def get_data():
    data = {'09-03-2017':'3243','10-03-2017':'23434','11-03-2017':'2323'}
    return jsonify(data)

if __name__ == "__main__":
    app.run(port=70)
