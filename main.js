video = "";

function preload() {
video = createVideo('video.mp4')
video.hide();
}

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function start()
{
    objectDetecter = ml5.objectDetecter('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function modelLoaded() 
{
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}