var snake = [];
var direction = Math.floor(Math.random()*4 +1);
var nb_hor;
var nb_ver;
var taille_rect = 30;
var space = taille_rect/4;
var apple = false;
var pos_apple;

function setup(){
  hor = windowWidth;
  ver = windowHeight;
  createCanvas(hor, ver);
  background(0);
  
  nb_hor = Math.floor((hor -space)/(taille_rect+space));
  nb_ver= Math.floor((ver-space)/(taille_rect+space));
  
  for (i = 0; i<nb_hor; i++){
    for (j = 0; j<nb_hor; j++){
      push();
      rect(i*(taille_rect+space) + space , j*(taille_rect+space) + space,taille_rect,taille_rect);
      pop();
    }
  }
  
  snake.push([0,0],[-1, -1], [-1,-1], [Math.floor(nb_hor/2), Math.floor(nb_ver/2)] );
}

function draw(){
  
  
  if (!apple){
    pos_x = Math.floor(Math.random()*nb_hor);
    pos_y = Math.floor(Math.random()*nb_ver);
    while ([pos_x, pos_y] in snake){
      pos_x = Math.floor(Math.random()*nb_hor);
      pos_y = Math.floor(Math.random()*nb_ver);
    }
    pos_apple = [pos_x,pos_y];
    push();
    fill(255,0,0);
    rect(pos_apple[0]*(taille_rect+space) + space , pos_apple[1]*(taille_rect+space) + space,taille_rect,taille_rect);
    pop();
    apple = true;
  }

    //where is snake
  for (i=0; i<snake.length; i++){
    push();
    fill(51);
    rect(snake[i][0]*(taille_rect+space) + space , snake[i][1]*(taille_rect+space) + space,taille_rect,taille_rect);
    pop();
  }
  
  frameRate(15);
  
  //where is he going
   if (direction == 1){//up
    snake.push([snake[snake.length -1][0], snake[snake.length -1][1] -1]);
    push();
    fill(255);
    rect(snake[0][0]*(taille_rect+space) + space , snake[0][1]*(taille_rect+space) + space,taille_rect,taille_rect);
    pop();
    snake.shift();
  }else if(direction ==2){//right
    snake.push([snake[snake.length -1][0] +1, snake[snake.length -1][1]]);
    push();
    fill(255);
    rect(snake[0][0]*(taille_rect+space) + space , snake[0][1]*(taille_rect+space) + space,taille_rect,taille_rect);
    pop();
    snake.shift();
  }else if(direction ==3){//down
    snake.push([snake[snake.length -1][0], snake[snake.length -1][1] +1]);
    push();
    fill(255);
    rect(snake[0][0]*(taille_rect+space) + space , snake[0][1]*(taille_rect+space) + space,taille_rect,taille_rect);
    pop();
    snake.shift();
  }else if(direction ==4){//left
    snake.push([snake[snake.length -1][0] -1, snake[snake.length -1][1]]);
    push();
    fill(255);
    rect(snake[0][0]*(taille_rect+space) + space , snake[0][1]*(taille_rect+space) + space,taille_rect,taille_rect);
    pop();
    snake.shift();
  }
  if(snake[snake.length-1][0] ==  pos_apple[0] && snake[snake.length-1][1] ==  pos_apple[1]){
    snake.unshift([0,0]);
    apple = false;
  }
  for (i = 0; i<snake.length-1; i++){
    if (snake[snake.length-1][0] == snake[i][0] && snake[snake.length-1][1] == snake[i][1]){
      noLoop();
    }
  }
  
  
  if (snake[snake.length-1][0] == -1 || snake[snake.length-1][1] == -1 || snake[snake.length-1][0] == nb_hor ||snake[snake.length-1][1] == nb_ver) {
    noLoop();
  }
  
  
  
 
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if (direction == 1 || direction == 3){
      direction = 4;
    }
    
  }else if (keyCode === RIGHT_ARROW) {
    if (direction == 1 || direction == 3){
      direction = 2;
    }
  }else if (keyCode === UP_ARROW) {
    if (direction == 2 || direction == 4){
      direction = 1;
    }
  }else if (keyCode === DOWN_ARROW) {
    if (direction == 2 || direction == 4){
      direction = 3;
    }
  }
}

