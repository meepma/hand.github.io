Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='ThisIsWhereThePaperWorkGoes' src='"+data_uri+"'>";
        
    })
}
console.log("ml5 version",ml5.version);
imageClassifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/a5I1ZJ1M_/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}