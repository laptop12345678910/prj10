var Peter_Pan_Song="";
var Hogwards_Theme_Song="";

function Preload(){
    Peter_Pan_Song = loadSound("music2.mp3");
    Hogwards_Theme_Song = loadSound("music.mp3");
}

function play()
{
    if(drop == "Peter_Pan_Song")
    {
        Peter_Pan_Song.play();
    }
    if(drop == "Hogwards_Theme_Song")
    {
        Hogwards_Theme_Song.play();
    }
}

function stop()
{
 Peter_Pan_Song.stop();
 Hogwards_Theme_Song.stop();
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center(); 

    video = createCapture(VIDEO);
    video.hide();
}
 
function draw(){
    image(video, 0, 100, 600, 500);
}