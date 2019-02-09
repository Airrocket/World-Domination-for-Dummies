//Find canvas and get context
var canvas = document.getElementById("gameScreen");
var cx = canvas.getContext("2d");

//Ball vars
var ballRadius = 10;
//X and y coords
var ballX = canvas.width/2;
var ballY = canvas.height-30;
var ballDx = 2;
var ballDy = -2;

//Paddle vars
//X and y coords
var paddleHeight = 10;
var paddleWidth = 90;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleY = canvas.height-paddleHeight
//Mvmt speed
var paddleDx = 5;
var paddleDy = 5;

//Controls
var rightPressed = false;
var leftPressed = false;
//Score
var score = 0;

//Brick vars
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = {x: 0, y: 0, status: 1};
  }
}
var numberOfBricks = brickRowCount*brickColumnCount

//Key press events
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//Controls
function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

//Brick collision detection
function collisionDetection() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if(ballX > b.x && ballX < b.x+brickWidth && ballY > b.y && ballY < b.y+brickHeight) {
          ballDy = -ballDy;
          b.status = 0;
          score += 1;
          //Speed up when score
          ballDy += ballDy/12
          ballDx += ballDx/12
          paddleDx += paddleDx/6
          paddleDy += paddleDy/6
        }
      }
    }
  }
}

//Draw start
cx.font = "50px Arial Black";
cx.fillStyle = "black";
cx.fillText("Press start!", 80, 100);

//Draw ball
function drawBall() {
  cx.beginPath();
  cx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
  cx.fillStyle = "#0095DD"
  cx.fill();
  cx.closePath();
}

//Draw paddle
function drawPaddle() {
  cx.beginPath();
  cx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
  cx.fillStyle = "#0095DD";
  cx.fill();
  cx.closePath();
}

//Draw bricks
function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks [c][r].status == 1) {
        var brickX = (c*(brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = (r*(brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        cx.beginPath();
        cx.rect(brickX, brickY, brickWidth, brickHeight);
        cx.fillStyle = "#0095DD";
        cx.fill();
        cx.closePath();
      }
    }
  }
}

//Draw Score
function drawScore() {
  cx.font = "250px Arial Black";
  cx.fillStyle = "black";
  if (score < 10) {
    cx.fillText(score, canvas.width/2-88, 300);
  } else {
    cx.fillText(score, canvas.width/2-170, 300);
  }
}

//Re-Draw Frame
function draw() {
  cx.clearRect(0, 0, canvas.width, canvas.height);
  drawScore();
  drawBricks();
  drawBall();
  drawPaddle();
  collisionDetection();
  if (score == numberOfBricks) {
    alert("You win!");
    document.location.reload();
  }

  //Ball collision detection
  //Top and botom walls
  if (ballY + ballDy < ballRadius) {
    ballDy = -ballDy;
  } else if (ballY + ballDy > canvas.height-ballRadius) {
    //Bounce when hit paddle
    if (ballX > paddleX && ballX < paddleX + paddleWidth) {
      ballDy = -ballDy;
    } else {
      //Game over when touch bottom wall
      alert("Game Over\nYou got " + score + " points!");
      document.location.reload();
    }
  }
  //Left and right walls
  if (ballX + ballDx > canvas.width-ballRadius || ballX + ballDx < ballRadius) {
    ballDx = -ballDx;
  }

  ballX += ballDx;
  ballY += ballDy;

  //Paddle movement
  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += paddleDx;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= paddleDy;
  }
}
