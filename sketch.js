var speed1;
var speed2;
var speed3;
var damage1;
var damage2;
var damage3;
var separater1;
var missile1;
var wall1;
var separater2;
var missile2;
var wall2;
var separater3;
var missile3;
var wall3;
var separater4;
function setup(){
createCanvas(1200,1200);
speed1=random(100,500);
speed2=random(100,500);
speed3=random(100,500);
weight=random(250,750);
missile1=createSprite(50,337.5,100,25);
missile1.shapeColor="blue";
missile1.velocityX=speed1;
wall1=createSprite(1100,193.75,50,387.5);
wall1.shapeColor="blue";
separater1=createSprite(600,0,1200,25);
separater1.shapeColor="white";
separater1.depth=wall1.depth+1;
missile2=createSprite(50,737.5,100,25);
missile2.shapeColor="blue";
missile2.velocityX=speed2;
wall2=createSprite(1100,600,100,387.5);
wall2.shapeColor="blue";
separater2=createSprite(600,400,1200,25);
separater2.shapeColor="white";
separater2.depth=wall2.depth+1;
missile3=createSprite(50,1137.5,100,25);
missile3.shapeColor="blue";
missile3.velocityX=speed3;
wall3=createSprite(1100,1000,150,387.5);
wall3.shapeColor="blue";
separater3=createSprite(600,800,1200,25);
separater3.shapeColor="white";
separater3.depth=wall3.depth+1;
separater4=createSprite(600,1200,1200,25);
separater4.shapeColor="white";
separater4.depth=wall3.depth+1;
}
function draw(){
background("black");
if(wall1.x-missile1.x<(missile1.width+wall1.width)/2){
missile1.velocityX=0;
damage1=0.5*weight*speed1*speed1/22509;
if(damage1<1000||damage1===1000){
wall1.shapeColor="green"
}
if(damage1>1000){
wall1.shapeColor="red"
}
console.log(damage1);
}
if(wall2.x-missile2.x<(missile2.width+wall2.width)/2){
missile2.velocityX=0;
damage2=0.5*weight*speed2*speed2/22509;
if(damage2<1000||damage2===1000){
wall2.shapeColor="green"
}
if(damage2>1000){
wall2.shapeColor="red"
}
console.log(damage2);
}
if(wall3.x-missile3.x<(missile3.width+wall3.width)/2){
missile3.velocityX=0;
damage3=0.5*weight*speed3*speed3/22509;
if(damage3<1000||damage3===1000){
wall3.shapeColor="green"
}
if(damage3>1000){
wall3.shapeColor="red"
}
console.log(damage3);
}
drawSprites();
}