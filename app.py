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
## ML
from keras.models import load_model
from keras.preprocessing.image import ImageDataGenerator
import tensorflow
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Dense,Dropout
import numpy as np
import keras 
from flask import Response


UPLOAD_FOLDER = './data/images'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/") # Home Directory 

def home_dir():
    return "Welcome to Home Dir"


@app.route("/photo_ML", methods = ['POST'])
def photo_classify():

	cancer_List = ['Melanoma','Benign keratosis','Basal cell carcinoma','Actinic Keratoses','Vascular skin lesions','Dermatofibroma']

	print("Endpoint Reached")
	print(request.files)
	img_data = {request.files}
	file = request.files['file']
	filename = 'Incoming_Image.jpg'
	file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

	# Reconstructing models and weights 

	mobile = tensorflow.keras.applications.mobilenet.MobileNet()
	x = mobile.layers[-6].output
	x = Dropout(0.25)(x)
	predictions = Dense(7, activation='softmax')(x)
	model = Model(inputs=mobile.input, outputs=predictions)
	model.load_weights('./Models/model_MobileNet.h5')

	# Prep datagen for test
	test_datagen = ImageDataGenerator(rescale=1./255,rotation_range=1,zoom_range=0.1)

	#For single tests
	test_batches = test_datagen.flow_from_directory('data/',
													target_size=(224,224),
													batch_size=1,
													shuffle=False)
	predictions = model.predict_generator(test_batches, steps=938, verbose=1)

	print(np.argmax(predictions[0]))
	print(cancer_List[np.argmax(predictions[0])])
	result = cancer_List[np.argmax(predictions[0])]
	normalized = (predictions[0]-min(predictions[0]))/(max(predictions[0])-min(predictions[0]))

	print(normalized)

	#response.headers["result"] = result 
	#return type of skin cancer

	r = Response(response=result, status=200, mimetype="application/xml")
	r.headers["Content-Type"] = "text/xml; charset=utf-8"
	r.headers["r"] = result
	return r

@app.route("/location")

def fetch_location():
    print("Fetching Hospital Info from API...")
    


if __name__ == "__main__":
    app.run(debug=True)