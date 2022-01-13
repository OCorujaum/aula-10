var caixa;





function setup(){
createCanvas(500,500);
caixa=createSprite(200,200,20,20);
caixa.shapeColor="blue";
background(30,30,30);







}




function draw(){


if(keyIsDown(RIGHT_ARROW)){
    caixa.shapeColor="yellow";

}

if(keyIsDown(RIGHT_ARROW)){
background("red");

}
if(keyIsDown(LEFT_ARROW)){
background("DeepSkyBlue");

}

if(keyIsDown(UP_ARROW)){
    background("GreenYellow");

}

if(keyIsDown(DOWN_ARROW)){
    background("DarkMagenta");
    
}



























drawSprites();
}
