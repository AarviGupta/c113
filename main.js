
function preload(){
   
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
    
}
function draw(){
    image(video,0,0,640,480);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);
    circle(50,430,80);
    circle(590,50,80);
    circle(590,430,80);
    fill(0,128,0);
    stroke(0,128,0);
    rect(0,0,640,20);
    rect(0,460,640,20);
    rect(0,20,20,480);
    rect(620,20,20,480);
   }
