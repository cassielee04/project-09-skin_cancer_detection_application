# Skin Cancer Detection Application

# User Stories

1) I am a mid-40 age woman and lives in Hawaii. Recently, I saw the mole on my right-upper arm. The color has been changed from yellow - brown - and now dark brown. I am little worried if this could be a skin cancer. I am a full time worker and I also have children that I do not have time to visit hospital. Therefore, I downloaded the “Skin Cancer App”. I used it to detect if my moles are symptoms of skin cancer. 

2) I am college student in Florida. I used to live in Boston before came to college. These days, the sun is too bright and my skin gets easily irritated. I wonder if my skin is not healthy enough as before. To make sure, I used the app to to check my level of skin health.


# Wireframe Architecture
![Alt text](/ProjectStructure.png?raw=true "Diagram")


# Systems Architecture



# Data Collection

- Researched in various existing skin cancer detection ML modules 
https://www.kaggle.com/nightwalk/skin-cancer-classif-using-pytorch-80-acc : Pytorch Implementation > 80% Accuracy 
- Looked for datasets to train the ML model 
https://www.kaggle.com/kmader/skin-cancer-mnist-ham10000 : 10,000 Training images 
- Looked for APIs to search for hospitals in the vicinity 
- Design a wrapping architecture that integrates all the modules

# Machine Learning Model
This model classifies skin lesions into seven classes. It is a fine tuned MobileNet CNN. All training was done in this kernel. The main challenges were the unbalanced dataset and the small amount of data. The data augmentation is used to reduce the class imbalance and in so doing get categorical accuracy scores that were not heavily skewed by a single majority class.

MobileNet’s small size and speed makes it ideal for web deployment.



## Outputs of Machine Learning
![Alt text](/output.png?raw=true "Results")

These are the types of skin cancer that model can detect

## Technologies Used
- Python Flask ( Backend server hosting )
  - We are going to be using the Microsoft Azure to host our backend server to run ML analysis on the incoming image from the    computer storage. Since running a machine learning algorithm in a mobile device is not adequate, we are going to be hosting a server in Azure so that it will handle the workload in the cloud.
- Node JS ( Application for mobile images -> Backend Server )
- Since we are going to develop an application that will run in web we will be using Node JS , CSS, and HTML to develop an Web app locally.
  
## APIs of the Project
- Google Map API (To locate and introduce hospital near users), Search Engine API (for shopping products for UVprotection)
- Numpy, pandas, sklearn
- NeedS API Key for SerpApi and Googlemap API

## Libraries needs to be installed
```
npm instll pug
npm install random util
npm install google-search-results-nodejs
npm install multiparty
```
## How to Run
```
node Server.js
```
## Tasks 

- Byounsul Lee: Tranined the ML Model and created Python flask server
- Seung Hee Lee: Applying APIs to the current application and connecting frontend and backend. 




