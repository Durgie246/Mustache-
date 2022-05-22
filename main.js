noseX = 0;
noseY = 0;
function preload()
{
clown_nose = loadImage("https://i.postimg.cc/kM6j7SFK/m.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", getPoses);
}

function draw()
{
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,30,30);
}

function take_snapshot()
{
    save("FilteredImage.png");
}

function getPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function modelLoaded()
{
    console.log("tHE MOdeL iS loAdedA")
}