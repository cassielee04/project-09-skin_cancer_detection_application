# Skin Cancer Detection Application

# User Stories

1) I am a mid-40 age woman and lives in Hawaii. Recently, I saw the mole on my right-upper arm. The color has been changed from yellow - brown - and now dark brown. I am little worried if this could be a skin cancer. I am a full time worker and I also have children that I do not have time to visit hospital. Therefore, I downloaded the “Skin Cancer App”. I used it to detect if my moles are symptoms of skin cancer. 

2) I am college student in Florida. I used to live in Boston before came to college. These days, the sun is too bright and my skin gets easily irritated. I wonder if my skin is not healthy enough as before. To make sure, I used the app to to check my level of skin health.

# Definition of First Sprint

- Research in various existing skin cancer detection ML modules 
https://www.kaggle.com/nightwalk/skin-cancer-classif-using-pytorch-80-acc : Pytorch Implementation > 80% Accuracy 
- Look for datasets to train the ML model 
https://www.kaggle.com/kmader/skin-cancer-mnist-ham10000 : 10,000 Training images 
- Look for APIs to search for hospitals in the vicinity 
- Design a wrapping architecture that integrates all the modules
- Getting used to mobile development (Swift)

# Project Architecture
![Alt text](/ProjectStructure.png?raw=true "Diagram")

# Technologies used in first sprint
- Microsoft Azure ( Backend server hosting )
  - We are going to be using the Microsoft Azure to host our backend server to run ML analysis on the incoming image from the        mobile device. Since running a machine learning algorithm in a mobile device is not adequate, we are going to be hosting a server in Azure so that it will handle the workload in the cloud.
- Xcode ( Application for mobile images -> Backend Server )
  - Since we are going to develop an application that will run in IOS we will be using Swift and Xcode to develop an mobile app locally.
  
# APIs of first sprint
- Google Map API (To locate and introduce hospital near users)
- Numpy, pandas, sklearn

# Task assignments
- Making a simple backend server and uploading it to Azure
- Learning & coding the mobile application for image upload

