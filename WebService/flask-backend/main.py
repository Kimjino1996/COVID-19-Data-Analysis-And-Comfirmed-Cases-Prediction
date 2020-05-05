from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

@app.route("/")
# @cross_origin(origin='*',headers=['Content-Type'])
def my_index():
    return render_template("index.html",token="Hello")

@app.route("/getData/<country>", methods = ['GET'])
def get_data(country):
    if request.method == 'GET':
        return jsonify( graph = "hihihi" , hihi = "sssss" , country = country)

if __name__ == "__main__":
    app.run(debug=True)
