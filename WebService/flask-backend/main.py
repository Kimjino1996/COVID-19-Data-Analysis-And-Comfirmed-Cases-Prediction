from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from google.cloud import bigquery
import os

# bigquery 환경변수 설정
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "./CDP2-73f693bd0248.json"
import logging

app = Flask(__name__)

# Construct a BigQuery client object.
client = bigquery.Client()
CORS(app)

@app.route("/")
def my_index():
    return render_template("index.html",token="Hello")

@app.route("/getData/<country>", methods = ['GET'])
def get_data(country):

    # table 이름은 country 로 구분
    # query문 설정
    query = """ SELECT * 
     FROM `cdp2-273404.cdp_data_prediction.predict_*`
     WHERE _TABLE_SUFFIX = @suffix """
    job_config = bigquery.QueryJobConfig(
        query_parameters=[
            bigquery.ScalarQueryParameter("suffix", "STRING", country)
        ]
    )
    query_job = client.query(query, job_config= job_config)
    print("The query data :")
    dates = []
    susceptible = []
    infected = []
    recovered = []
    infected_data = []
    recovered_data = []
    for row in query_job:
        dates.append(row[0])
        susceptible.append(row[1])
        infected.append(row[2])
        recovered.append(row[3])
        infected_data.append(row[4])
        recovered_data.append(row[5])

    if request.method == 'GET':
        return jsonify(date = dates,suscept=susceptible, infect=infected,recover=recovered,infect_data=infected_data,recover_data=recovered_data)

if __name__ == "__main__":
    app.run(debug=True)
