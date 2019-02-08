var canvas = document.getElementById("gameScreen");
var cx = canvas.getContext("2d");
var pointsX = [];
var pointsY = [];
var numPoints = 0;

//report the mouse position on click
canvas.addEventListener("click", function (evt) {
    var mousePos = getMousePos(canvas, evt);
    console.log(mousePos.x + ', ' + mousePos.y);
    numPoints += 1;
    pointsX.push(mousePos.x);
    pointsY.push(mousePos.y);
    drawPoints(pointsX, pointsY, numPoints);
}, false);

//Get Mouse Position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

//Draw points
function drawPoints(pointsX, pointsY, numPoints) {
  for (var i = 0; i <= numPoints-1; i++) {
    circle(pointsX[i], pointsY[i]);
  };
};

//Draw circles
function circle(centerX, centerY) {
  cx.beginPath();
  cx.arc(centerX, centerY, 10, 0, 2*Math.PI);
  cx.fill();
  cx.closePath();
};

//Draw line
function drawLine(intercept, slope) {
  cx.beginPath();
  cx.moveTo(0, intercept);
  cx.lineTo(900, slope*900+intercept);
  cx.stroke();
  cx.closePath();

};

//Gradient Step
function gradStep(intercept, slope, alpha) {
  var interceptSum = 0;
  var slopeSum = 0;
  for (var i = 0; i <= numPoints-1; i++) {
    interceptSum += slope*pointsX[i]+intercept-pointsY[i];
    slopeSum += pointsX[i]*(slope*pointsX[i]+intercept-pointsY[i]);
  };

  var newIntercept = intercept-alpha/numPoints*interceptSum;
  var newSlope = slope-alpha/numPoints*slopeSum;

  return [newIntercept, newSlope];
};

function doGradDescent() {
  var alpha = .00001;
  slope = 0;
  intercept = 250;
  drawLine(intercept, slope);
  function oneStep () {
    var newValues = gradStep(intercept, slope, alpha)
    intercept = newValues[0];
    slope = newValues[1];
    cx.clearRect(0, 0, canvas.width, canvas.height);
    drawPoints(pointsX, pointsY, numPoints);
    drawLine(intercept, slope);
    console.log("onestep:" + intercept + " " + slope);
  };
  setInterval(oneStep, 500);
};
