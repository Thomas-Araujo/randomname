//do not remove this link under penalty of law
//https://teachablemachine.withgoogle.com/models/JjUuGIZ2-/
//do not remove this link under penalty of law
Prediction1="";
Prediction2="";
function speak(){
    var synth=window.speechSynthesis;
    var speakdata1="The first prediction is "+Prediction1;
    var speakdata2="The second prediction is "+Prediction2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("camera");
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captureimage" src="'+data_uri+'"/>';
    });
};
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JjUuGIZ2-/model.json",modelLoaded);
function modelLoaded(){
    console.log("model is loaded")
}
function check(){
    img=document.getElementById("captureimage");
    classifier.classify(img,goResults);
}
function goResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("resultemotionname").innerHTML=results[0].label;
        document.getElementById("resultemotionname2").innerHTML=results[1].label;
        Prediction1=results[0].label;
        Prediction2=results[1].label;
        speak();
        if(Prediction1=="Good"){
            document.getElementById("updateemoji").innerHTML="&#128077;";
        }
        if(Prediction1=="Bad"){
            document.getElementById("updateemoji").innerHTML="&#128078;";
        }
        if(Prediction1=="Peace"){
            document.getElementById("updateemoji").innerHTML="&#9996;";
        }
        if(Prediction1=="Rock"){
            document.getElementById("updateemoji").innerHTML="&#129304;";
        }
        if(Prediction1=="Okay"){
            document.getElementById("updateemoji").innerHTML="&#128076;";
        }
        if(Prediction2=="Good"){
            document.getElementById("updateemoji").innerHTML="&#128077;";
        }
        if(Prediction2=="Bad"){
            document.getElementById("updateemoji").innerHTML="&#128078;";
        }
        if(Prediction2=="Peace"){
            document.getElementById("updateemoji").innerHTML="&#9996;";
        }
        if(Prediction2=="Rock"){
            document.getElementById("updateemoji").innerHTML="&#129304;";
        }
        if(Prediction2=="Okay"){
            document.getElementById("updateemoji").innerHTML="&#128076;";
        }
    }
}