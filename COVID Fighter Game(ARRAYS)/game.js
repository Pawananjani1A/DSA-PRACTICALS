function load_images()
{
    // player,virus,gem
}

function init()
{
//  define objects that we will have in the game
canvas = document.getElementById("mycanvas");
W = canvas.width = 700;
H = canvas.height = 400;

// create a context
pen = canvas.getContext('2d');

 box = {
  x:150,
  y:50,
  w:60,
  h:60,
speed:10,
};

}

function draw()
{   

    // clear the canvas area for the old frame
    pen.clearRect(0, 0, W, H);
   
   pen.fillStyle = "red";
   pen.fillRect(box.x,box.y,box.w,box.h);
}

function update()
{  

    //  move the box downwards and upwards
    box.y += box.speed;

    if(box.y>H-box.h || box.y<0)
    {
        box.speed *= -1;
    }
}

function gameloop()
{
  draw();
  update();
  console.log("In gameloop");
}


load_images();
init();
var f = setInterval(gameloop,100);