






function init()
{  
    // console.log("In init");
    canvas = document.getElementById("mycanvas");
    W = H= canvas.width = canvas.height = 1000;
    // canvas is used to draw graphics
    pen = canvas.getContext('2d');
    cs = 66;
    game_over = false;

    snake = {
        init_len: 5,
        color: "blue",
        cells: [],
        direction: "right",

        createSnake:function (){
           for(var i=this.init_len;i>0;i--)
           {
               this.cells.push({x:i,y:0});
           }
        },
        drawSnake: function (){
            for(var i =0;i<this.cells.length;i++)
            {  
                pen.fillStyle = this.color;
                pen.fillRect(this.cells[i].x*cs, this.cells[i].y*cs, cs-2, cs-2);
            }
        },
    };

    snake.createSnake();
}

function draw()
{
    snake.drawSnake();
     


}

function update()
{
//   console.log("In update");
rect.x += rect.speed;
if(rect.x>W-rect.w || rect.x<0)
{
   rect.speed *= -1;
}

}

function gameLoop()
{ 
//   console.log("In gameLoop");
    if (game_over === true) clearInterval(f);
  draw();
  update();
}

init();
var f = setInterval(gameLoop,100);


