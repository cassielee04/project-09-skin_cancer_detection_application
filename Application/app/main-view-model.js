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
var frameModule = require("ui/frame") 
var url1 = "http://983f786e.ngrok.io/photo_ML";
var method = "POST";



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
                    
                    task.on("responded", responded);


                    function responded(e) {
                        console.log("eventName: " + e.eventName);
                        console.log("data: " + e.data);
                        //console.log("File is sent ")
                        var navoptions = {
                            moduleName:'output',
                            results: e.data
                        }
                        console.log("File is sent2 ")

                        frameModule.topmost().navigate(navoptions,{'results':e.data});  
                        console.log("Nav is done")
                        }

                    
                };
                

                }
                )
            console.log("problem here")

            
        });
    }

    viewModel.checkResults = function() {
        var navoptions = {
            moduleName:'output'
        }
        console.log("File is sent2 ")
        frameModule.topmost().navigate(navoptions);  
    }

    return viewModel;
}


function checkResults(args) {
    // const button = args.object;
    // const page = button.page;
    // page.frame.navigate("output");
    var navoptions = {
        moduleName:'output'
    }
    console.log("File is sent2 ")
    frameModule.navigate(navoptions);  
}

exports.checkResults = checkResults;

exports.createViewModel = createViewModel;
