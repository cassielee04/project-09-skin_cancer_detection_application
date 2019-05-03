const Observable = require("tns-core-modules/data/observable").Observable;
var camera = require("nativescript-camera");
var imageModule = require("tns-core-modules/ui/image");
const httpModule = require("http");
var imageSource = require("image-source")
var fs = require("tns-core-modules/file-system");
const imageSourceModule = require("tns-core-modules/image-source")
var bghttpModule = require("nativescript-background-http");
var session = bghttpModule.session("image-upload");
const fileSystemModule = require("tns-core-modules/file-system")

var url1 = "http://cc0c7ec1.ngrok.io/photo_ML";
var method = "POST";
var postData;


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

        console.log("hello");
    
        camera.takePicture({
            width: 300,
            height: 300,
            keepAspectRatio: true
        }).then(imageAsset=> {
            console.log("Image taken!");
            var folder = fs.knownFolders.documents();
            console.log("folder", folder);
            var path = fs.path.join(folder.path, "Test.png");
            console.log("path",path); 

            var img = new imageSourceModule.ImageSource();
            console.log("problem here1")
            img.fromAsset(imageAsset).then((imageSource) => {
                const folder = fileSystemModule.knownFolders.documents().path;
                const fileName = "test.png";
                const path = fileSystemModule.path.join(folder, fileName);
                const saved = imageSource.saveToFile(path, "png");
                if (saved) {
                    console.log("Image saved successfully!");
                    var request = {
                                url: url1,
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/octet-stream",
                                    "File-Name": "Test.png"
                                },
                                description: "{ 'uploading': " + "Test.png" + " }"
                            };
                    var params = [
                        {name:"uploaded",filename:path,mimeType:"image/png"}
                    ];
                    var task = session.multipartUpload(params, request);
                    console.log(task);

                };
                }
                )
            //img = imageSource.FromAsset(imageAsset); 
            console.log("problem here")
            // var savedfile =img.saveToFile(path,"png")
            // if(savedfile){
            //     var request = {
            //         url: url1,
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/octet-stream",
            //             "File-Name": "Test.png"
            //         },
            //         description: "{ 'uploading': " + "Test.png" + " }"
            //     };
            //     console.log("B4 sending")
            //     var task = session.uploadFile(imageSource, request);
            //     console.log("Sent")
            //     task.on("progress", logEvent);
            //     task.on("error", logEvent);
            //     task.on("complete", logEvent);
        
            //     function logEvent(e) {
            //         console.log("----------------");
            //         console.log('Status: ' + e.eventName);
            //         // console.log(e.object);
            //         if (e.totalBytes !== undefined) {
            //             console.log('current bytes transfered: ' + e.currentBytes);
            //             console.log('Total bytes to transfer: ' + e.totalBytes);
            //         }
            //     }
            // }
            // else{
            //     console.log("file not saved")
            // }

            // imageSourceModule.fromAsset(imageAsset) 
            //     .then((imageSource) => {
            //         console.log("b4 save",saved);
            //     const saved = imageSource.saveToFile(path, "png");
            //     console.log("save",saved); //True on ANDROID but false on IOS
            //   });
            
    
            
        });
    }

    

    return viewModel;
}

exports.createViewModel = createViewModel;
