var tower1,tower2,tower3,base;
var ring1,ring2,ring3;

var ring1OnFirstTower = false ,ring1OnSecondTower = false ,ring1OnThirdTower  = false ;
var ring2OnFirstTower  = false , ring2OnSecondTower = false ,ring2OnThirdTower = false ;

var ring3OnFirstTower  = false , ring3OnSecondTower = false ,ring3OnThirdTower = false ;

function setup() {
  createCanvas(500, 500);
 tower1 = createSprite(110,205,10,200);
  tower1.shapeColor = "brown";
 tower2 = createSprite(200,205,10,200);
  tower2.shapeColor = "brown";
 tower3 = createSprite(300,205,10,200);
  tower3.shapeColor = "brown";
 base = createSprite(205,310,265,10);
  base.shapeColor = "brown";
 ring3 = createSprite(110,300,75,10);
  ring3.shapeColor = "yellow";
 ring2 = createSprite(110,290,55,10);
  ring2.shapeColor = "orange";
 ring1 = createSprite(110,280,35,10);
  ring1.shapeColor = "red";

}

function draw() {
  background(220);

  text("X " + World.mouseX +"Y " + World.mouseY, World.mouseX,World.mouseY);
  
  /*************ring 1**************** */
  if(mousePressedOver(ring1) && ring1.x !=200){
    ring1OnFirstTower = true
    ring1.y = 100; 
  }

  
  if (mousePressedOver(tower2) && ring1OnFirstTower === true ){
    ring1.x = 200;
    ring1.y = 300;
    sleep(500)
    ring1OnSecondTower =  true;
    ring1OnFirstTower = false;
  }

 
  //console.log("RIng1 at start"+ ring1.y + ring1.x)
  if(mousePressedOver(ring1) && ring1OnSecondTower === true){
    console.log("inside ring pressed")
    ring1.x = 200;
    ring1.y = 90;
  }

  if(mousePressedOver(tower2) && ring1OnThirdTower === true){
    sleep(500)
    ring1.x = 200;
    ring1.y = 300; 

    ring1OnSecondTower = true;
    ring1OnThirdTower = false;
  }
  if (mousePressedOver(tower3) && ring1OnFirstTower === true )
    {
      ring1.x = 300;
      ring1.y = 294;

      ring1OnThirdTower = true;
      ring1OnSecondTower = false;
      ring1OnFirstTower = false;
    }

    if (mousePressedOver(tower3) && ring1OnSecondTower === true ){
      ring1.x = 300;
      ring1.y = 294;

      sleep(1000)

      ring1OnThirdTower = true;
      ring1OnSecondTower = false;
      ring1OnFirstTower = false;
    }


    if(mousePressedOver(ring1) && ring1OnThirdTower === true  ){
      ring1.x = 300;
      ring1.y = 90;
    }

    /*************ring 1**************** */


    /*************ring2****************** */
if(mousePressedOver(ring2) && ring2OnFirstTower == true){
ring2.y = 80;
}

if(mousePressedOver(ring2) && ring2OnFirstTower == true ){
ring2.x = 200;
ring2.y = 300;

ring2OnSecondTower = true;
ring2OnFirstTower = false;
}

if(mousePressedOver(ring2) && ring2OnSecondTower == true){
  ring2.y = 80;
  ring2.x = 200;
}

    if(mousePressedOver(ring2)){
      console.log("in ring2")
      if(ring1OnFirstTower != true) {
        console.log("in ring2 inside")
        ring2OnFirstTower = true
        ring2.y = 100; 
      }
    }

    
  if (mousePressedOver(tower2) && ring2OnFirstTower === true ){
    ring2.x = 200;
    ring2.y = 300;
    sleep(500)
    ring2OnSecondTower =  true;
    ring2OnFirstTower = false;
  }

  drawSprites();
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}