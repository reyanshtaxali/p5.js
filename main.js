function preload(){
}

function setup(){
    canvas=createCanvas(170,170);
    canvas.center;
    video=createCapture(VIDEO);
    video.hide();
    

    tint_color="";
}

function draw(){
    image(video,0,0,170,170);
    tint(tint_color);


}

function take_snapshot(){
    save('reyansh_taxali.png');
}

