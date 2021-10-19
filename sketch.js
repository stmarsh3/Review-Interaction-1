
// s1_1: change color
// setting up global variable for s1_1
let s1_1_color = 0;
let s1_1_colorChange = 1;
let s1_1_colorLimit = 0;



function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
    background(220);



//s1
//laptop screen
  fill(180)
   rect(220, 98, 302, 218, 5);
  fill(40)
   rect(220, 100, 300, 220, 5);

//s1_1
//screen color
if (s1_1_color > 500 || s1_1_color < 0) {
  s1_1_colorChange = s1_1_colorChange*-1;
  }
s1_1_color = s1_1_color + s1_1_colorChange;

  fill(0, 0, s1_1_color)
   rect(225, 105, 290, 200, 5)



  fill(200)
   quad(110, 415, 410, 415, 518, 320, 220, 320);



//s2
//laptop base
  fill(200)
   quad(110, 415, 410, 415, 420, 410, 100, 410);
  fill(200)
   quad(100, 410, 420, 410, 516, 330, 220, 320);



//rect01
//top base
  fill(200)
   quad(100, 400, 420, 400, 518, 320, 220, 320);



//rect02
//front base
  fill(200)
   rect(101, 400, 320, 10);


//rect03
//side base
  fill(200)
   quad(420, 410, 420, 400, 518, 320, 518, 330);



//rect04
//mouse pad
  fill(200)
   quad(220, 395, 300, 395, 330, 375, 250, 375);



//rect05
//keyboard
  fill(210)
   quad(438, 372, 490, 330, 220, 330, 161, 372);
}
