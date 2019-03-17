from flask import Flask

app = Flask(__name__)

@app.route("/") # Home Directory 
def home_dir():
    return "Hello World"

@app.route("/photo_ML")
def photo_classify():
    pass


if __name__ == "__main__":
    app.run(debug=True)