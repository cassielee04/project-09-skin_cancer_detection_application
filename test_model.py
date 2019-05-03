from keras.models import load_model
from keras.preprocessing.image import ImageDataGenerator
import tensorflow
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Dense,Dropout
import numpy as np
import keras 


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

print(predictions)
print(np.argmax(predictions[0]))


# img = cv2.imread('data/images/HISTO.jpg')
# print(img.shape)
# resized_image = cv2.resize(img, (100, 75))
# print(resized_image.shape)

# resized_image = np.expand_dims(resized_image, axis=0)
# print(resized_image.shape)
# img_class=model.predict_classes(resized_image)
# img_prob=model.predict(resized_image)

# print(img_class)
# print(img_prob)

# x_test = test_datagen.flow_from_directory(

#     directory=r'data/images',
#     batch_size=40,
#     target_size=(75,100),
#     class_mode="categorical",
#     shuffle=True,
#     seed=42

# )