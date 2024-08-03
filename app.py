from flask import Flask, jsonify, request

app = Flask(__name__)

# Define a simple route
@app.route('/')
def home():
    return "Hello, Flask!"

# Define a route with parameters
@app.route('/greet/<name>')
def greet(name):
    return f"Hello, {name}!"

# Define a route that accepts GET and POST methods
@app.route('/data', methods=['GET', 'POST'])
def data():
    if request.method == 'POST':
        posted_data = request.json
        return jsonify(posted_data)
    return jsonify({"message": "Send a POST request with JSON data."})

if __name__ == '__main__':
    app.run()
