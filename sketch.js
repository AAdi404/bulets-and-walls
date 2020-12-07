var bullet1;
var wall1;
var separater1;
var bullet2;
var wall2;
var separater2;
var bullet3;
var wall3;
function setup(){
createCanvas(1200,1200);
bullet1=createSprite(50,300,100,12.5);
bullet1.shapeColor="green";
wall1=createSprite(1150,215,50,300);
wall1.shapeColor="green";
separater1=createSprite(600,391.666666667,1200,50);
separater1.shapeColor="green";
bullet2=createSprite(50,757,100,12.5);
bullet2.shapeColor="green";
wall2=createSprite(1150,632,50,300);
wall2.shapeColor="green";
separater2=createSprite(600,808.333333334,1200,50);
separater2.shapeColor="green";
bullet3=createSprite(50,1174,100,12.5);
bullet3.shapeColor="green";
wall3=createSprite(1150,1050,50,300);
wall3.shapeColor="green";
}
function draw(){
background(0); 
bullet1.collide(wall1);
bullet2.collide(wall2);
bullet3.collide(wall3);
if(keyDown("1")){
bullet1.velocityX=60;
}
if(keyDown("2")){
bullet2.velocityX=50;
}
if(keyDown("3")){
bullet3.velocityX=45;
}
console.log(bullet1.x-wall1.x);
if(bullet1.x-wall1.x<=bullet1.width/2+wall1.width/2&&wall1.x-bullet1.x<=bullet1.width/2+wall1.width/2&&bullet1.y-wall1.y<=bullet1.height/2+wall1.height/2&&wall1.y-bullet1.y<=bullet1.height/2+wall1.height/2){
bullet1.shapeColor="red";
wall1.shapeColor="red";
}
else{wall1.shapeColor="green";bullet1.shapeColor="green";
}
console.log(bullet2.x-wall2.x);
if(bullet2.x-wall2.x<=bullet2.width/2+wall2.width/2&&wall2.x-bullet2.x<=bullet2.width/2+wall2.width/2&&bullet2.y-wall2.y<=bullet2.height/2+wall2.height/2&&wall2.y-bullet2.y<=bullet2.height/2+wall2.height/2){
bullet2.shapeColor="red";
wall2.shapeColor="red";
}
else{wall2.shapeColor="green";bullet2.shapeColor="green";
}
console.log(bullet3.x-wall3.x);
if(bullet3.x-wall3.x<=bullet3.width/2+wall3.width/2&&wall3.x-bullet3.x<=bullet3.width/2+wall3.width/2&&bullet3.y-wall3.y<=bullet3.height/2+wall3.height/2&&wall3.y-bullet3.y<=bullet3.height/2+wall3.height/2){
bullet3.shapeColor="red";
wall3.shapeColor="red";
}
else{wall3.shapeColor="green";bullet3.shapeColor="green";
}
drawSprites();
}