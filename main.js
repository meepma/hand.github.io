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
imageClassifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/St7aLGN5z/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function predict(){
    img=document.getElementById("ThisIsWhereThePaperWorkGoes");
    imageClassifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);

    }else{
        console.log(results);
        document.getElementById("name1").innerHTML=results[0].label;
        document.getElementById("name2").innerHTML=results[1].label;
        if(results[0].label=="Thumbs up"){
            document.getElementById("emoji1").innerHTML="&#128077;";
        }
        if(results[0].label=="Good job!!!!"){
            document.getElementById("emoji1").innerHTML="&#128076;";
        }
        if(results[0].label=="Victory!!!!!!!!"){
            document.getElementById("emoji1").innerHTML="&#9996;";
        }
        
        if(results[1].label=="Thumbs up"){
            document.getElementById("emoji2").innerHTML="&#128077;";
        }
        if(results[1].label=="Good job!!!!"){
            document.getElementById("emoji2").innerHTML="&#128076;";
        }
        if(results[1].label=="Victory!!!!!!!!"){
            document.getElementById("emoji2").innerHTML="&#9996;";
        }
        
    }
}