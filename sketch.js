const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var maxDrops=100;
var drops=[];
function preload(){
    
}

function setup(){
    var canvas = createCanvas(500, 700); 
    engine = Engine.create();
   world = engine.world;
   
    for(var i = 0; i < maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
     }


   

}

function draw(){
    background("red")
  
  

    for(var i = 0; i < maxDrops; i++){
                 drops[i].display(); 
     }
   
  drawSprites();
}   

