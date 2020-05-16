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
     WHERE _TABLE_SUFFIX = @suffix
     ORDER BY date_field_0 ASC """
    job_config = bigquery.QueryJobConfig(
        query_parameters=[
            bigquery.ScalarQueryParameter("suffix", "STRING", country)
        ]
    )
    query_job = client.query(query, job_config= job_config)
    print("The query data :")
    infected_dates = []
    string_temp=""
    infected_data_dates = []
    recovered_data = []
    for row in query_job:
        string_temp=row[0].strftime("%Y-%m-%d")+"-"+str(row[2])
        infected_dates.append(string_temp)
        string_temp=""
        string_temp = row[0].strftime("%Y-%m-%d") + "-" + str(row[4])
        infected_data_dates.append(string_temp)
        string_temp=""

    if request.method == 'GET':
        return jsonify(infect_date = infected_dates,infected_data_date=infected_data_dates)#,suscept=susceptible, infect=infected,recover=recovered,infect_data=infected_data,recover_data=recovered_data

if __name__ == "__main__":
    app.run(debug=True)
