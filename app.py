from flask import Flask
from flask import request
from flask import jsonify
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import os
from glob import glob
import seaborn as sns

from PIL import Image

torch.manual_seed(42)
np.random.seed(42)


app = Flask(__name__)

@app.route("/") # Home Directory 
def home_dir():
    return "Welcome to Home Dir"


@app.route("/photo_ML", methods = ['POST'])
def photo_classify():
    print("Endpoint Reached")
    print(request.files)
    img_data = {request.files}
    file = request.files['file']
    filename = secure_filename(file.filename)
    file.save(os.path.join(app.config['./data/images'], filename))
    return "Image Received?", 200

@app.route("/location")
def fetch_location():
    print("Fetching Hospital Info from API...")
    


if __name__ == "__main__":
    app.run(debug=True)