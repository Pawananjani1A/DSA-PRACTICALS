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

game_over = false;
won = false;

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
        health:100,
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

function detectCollision(playerA,enemyA)
{
   
        if(playerA.x<enemyA.x+enemyA.w &&
            playerA.x+playerA.w>enemyA.x &&
            playerA.y<enemyA.y+enemyA.h &&
            playerA.y+playerA.h>enemyA.y)
            {
                // collision detected
                return true;
            }

    return false;
}

function draw()
{   

    // clear the canvas area for the old frame
    pen.clearRect(0, 0, W, H);
   
   
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

    pen.fillStyle = "red";
    pen.font = "30px Roboto";
    pen.fillText("Score : "+player.health,10,25);
}

function update()
{    

    // if the player is moving
    if(player.moving==true)
    {
        player.x += player.speed;
        player.health += 20;
    }

    // overlap
    if(detectCollision(player,gem))
    {
        // console.log("You won the game");
        game_over = true;
        won = true;
        return;
    }

    for(var i=0;i<enemy.length;i++)
    {
        if(detectCollision(player,enemy[i]))
        {
            
            player.health -= 50;

            if(player.health<0)
            {
                   // console.log("You lost the game");
                game_over = true;
               
            }
            
            
        }
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

    if(game_over==true)
    {  
        clearInterval(f);
        if(won==true)
        {
            alert("You Won!");
        }
        else 
        {  

            alert("Game Over ! Your health : "+player.health);
        }

    }
  draw();
  update();
  console.log("In gameloop");
}


load_images();
init();
var f = setInterval(gameloop,100);