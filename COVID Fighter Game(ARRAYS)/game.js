function load_images()
{
    // player,virus,gem
    enemy_image = new Image();
    enemy_image.src = "Assets/v1.png";

    player_image = new Image();
    player_image.src = "Assets/superhero.png";

    gem_image = new Image();
    gem_image.src = "Assets/gem.png";

}

function init()
{
//  define objects that we will have in the game
canvas = document.getElementById("mycanvas");
W = canvas.width = 700;
H = canvas.height = 400;

// create a context
pen = canvas.getContext('2d');

 e1 = {
  x:150,
  y:50,
  w:60,
  h:60,
speed:20,
};

    e2 = {
        x: 300,
        y: 150,
        w: 60,
        h: 60,
        speed: 30,
    };

    e3 = {
        x: 450,
        y: 20,
        w: 60,
        h: 60,
        speed: 40,
    };

    enemy = [e1,e2,e3];

    player = {
        x:20,
        y:H/2-15,
        w:60,
        h:60,
        speed:20,
        moving:false,
    };

    gem={
       x:W-100,
       y:H/2-15,
       w:60,
       h:60
    };

    // listen to events on the canvas
    canvas.addEventListener("mousedown",function(){
        console.log("Mouse pressed");
        player.moving = true;
    });


    canvas.addEventListener("mouseup", function () {
        console.log("Mouse released");
        player.moving = false;
    });




}

function draw()
{   

    // clear the canvas area for the old frame
    pen.clearRect(0, 0, W, H);
   
   pen.fillStyle = "red";
//    pen.fillRect(box.x,box.y,box.w,box.h);
    // pen.drawImage(enemy_image,box.x, box.y, box.w, box.h);

    // draw the player
    pen.drawImage(player_image,player.x,player.y,player.w,player.h);

    // draw the gem
    pen.drawImage(gem_image,gem.x,gem.y,gem.w,gem.h);

    for(var i=0;i<enemy.length;i++)
    {
        pen.drawImage(enemy_image,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h);
    }
}

function update()
{    

    // if the player is moving
    if(player.moving==true)
    {
        player.x += player.speed;
    }

    //  move the box downwards and upwards
    // update each enemy by the same logic
    for(var i=0;i<enemy.length;i++)
    {
        enemy[i].y += enemy[i].speed;

        if (enemy[i].y > H - enemy[i].h || enemy[i].y < 0) {
            enemy[i].speed *= -1;
        }
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