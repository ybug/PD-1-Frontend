from flask import Flask
import requests

app = Flask(__name__)

@app.route('/')
def start():
    url = 'http://icanhazip.com'
    response = requests.get(url)
    return response.text

if __name__ == '__main__':
    app.run(port=80)