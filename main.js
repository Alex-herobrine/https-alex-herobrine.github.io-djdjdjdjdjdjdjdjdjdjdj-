song = "";
song = "";

scoreleftwrist=0;
scorerightwrist=0;
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload()
{
song=loadSound("music.mp3");
song=loadSound("music2.mp3");
}

function setup()
{
canvas=createCanvas(600, 700);
canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{
image(video,0, 0, 600, 500);

fill('2DFFFF');
stroke('2DFFFF');
if (scorerightwrist>0.2)
{
circle(rightWristX,rightWristY,20);
if(rightWristY>0 && rightWristY<=100)
{
document.getElementById("speed").innerHTML="speed=0.5x";
song.rate(0.5);
}

else if (rightWrist>100 && rightWrist<=200)
{
document.getElementById("speed").innerHTML="speed=1x";
song.rate=(1);
}
else if (rightWrist>200 && rightWrist<=300)
{
document.getElementById("speed").innerHTML="speed=1.5x";
song.rate=(1.5)
}
else if (rightWrist>300 && rightWrist<=400)
{
document.getElementById("speed").innerHTML="speed=2x";
song.rate=(2);
}
else if (rightWrist>400 && rightWrist<=500)
{
document.getElementById("speed").innerHTML="speed=2.5x";
song.rate=(2.5);
}
}
if (scoreleftwrist>0.2)
{
circle(leftWristX,leftWristY,20);
innumberleftwristY=Number(leftWristY);
RemoveDecimals=floor(innumberleftwristY);
volume=RemoveDecimals/500;
document.getElementById("volume").innerHTML="Volume ="+ volume;
sound.setVolume(volume);
}
}

function play()
{3
song.play();
song.setVolume(1);
song.rate(1);
}

function modelLoaded()
{
console.log("poseNet is initiallized");
}

function gotPoses(results)
{
if (results.length>0){
console.log(results);
scoreleftwrist=results[0].pose.keypoints[9].score;
console.log("scoreleftwrist="+scoreleftwrist);
rightWristX=results[0].pose.rightWrist.X;
rightWristy=results[0].pose.rightWrist.Y;
console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
leftWristX=results[0].pose.leftWrist.X;
leftWristy=results[0].pose.leftWrist.Y;
console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);
}
}