const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var redcake,redcakeImage;

function preload() {
    pancakeImg = loadImage("red vallent cake.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
redcake=createSprite(700,320,70,70);
redcake.addImage(redcakeImage);
redcake.scale=0.3

   

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    drawSprites();
}
