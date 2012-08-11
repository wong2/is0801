#-*-coding:utf-8-*-

from flask import Flask
from flask import render_template, request
import json

DEBUG = True

app = Flask(__name__, static_folder="public")
app.config.from_object(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/contact", methods=["POST"])
def createContact():
    contact = request.json
    print contact
    return contact

@app.route("/contacts")
def getContacts():
    contact = {
        "name": "王大鸟",
        "phone": 1312345678,
        "email": "wonderfuly@gmail.com",
        "qq": 17171771,
        "blog": "http://wong2.cn",
        "renren": "http://renren.com/wong22",
        "weibo_url": "http://weibo.com/wang2",
        "weibo_id": "wong2",
        "address": "北京市朝阳区xxx"
    }

    fake_data = [contact, contact]
    return json.dumps(fake_data)

if __name__ == '__main__':
    app.run("0.0.0.0")
