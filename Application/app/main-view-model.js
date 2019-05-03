const Observable = require("tns-core-modules/data/observable").Observable;
var camera = require("nativescript-camera");
var imageModule = require("tns-core-modules/ui/image");


function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

function createViewModel() {
    var viewModel = new Observable();

    viewModel.picture = "https://placehold.it/300x300";

    var options = { width: 300, 
                    height: 300, 
                    keepAspectRatio: false, 
                    saveToGallery: true };


    viewModel.takePicture = function() {

        console.log("Result is an image asset instance");
    
        if(!camera.isAvailable()){
            console.log("Camera is not available on this device")
        }
        else
        {
            camera.takePicture(options)   
                .then(function (imageAsset) {

                    viewModel.set('picture', imageAsset);

                }).catch(function (err) {
                    console.log("Error -> " + err.message);
            });
            
        }   

    }

    return viewModel;
}


exports.createViewModel = createViewModel;
