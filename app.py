from flask import Flask, jsonify, render_template
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data', methods=['GET'])
def get_data():

    data = {
        "suhumax": 36,
        "suhumin": 23,
        "suhurata": 28.35,
        "nilai_suhu_max_humid_max": [
            {
                "idx": 101,
                "suhu": 36,
                "humid": 36,
                "kecerahan": 25,
                "timestamp": datetime(2010, 9, 18, 7, 23, 48).strftime("%Y-%m-%d %H:%M:%S")
            },
            {
                "idx": 226,
                "suhu": 36,
                "humid": 36,
                "kecerahan": 27,
                "timestamp": datetime(2011, 5, 2, 12, 29, 34).strftime("%Y-%m-%d %H:%M:%S")
            }
        ],
        "month_year_max": [
            {"month_year": "9-2010"},
            {"month_year": "5-2011"}
        ]
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)