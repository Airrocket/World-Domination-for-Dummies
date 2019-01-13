$(document).ready(() => {
  function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }

  var canvas = document.getElementById('gameScreen');

  var container = document.getElementById('game');
  var height = (container.offsetHeight) * .98;
  var width = (container.offsetWidth) * .98;

  canvas.height = height;
  canvas.width = width;

  var cx = canvas.getContext('2d');

  cx.beginPath();
  cx.fillStyle = "white";
  cx.fillRect(0,0, width, height);
  console.log('clear');
  cx.closePath();

  cx.beginPath();
  sleep(10000);
  cx.fillStyle = "blue";
  cx.fillRect(0, 0, width, height);
  cx.closePath();

  // cx.beginPath();
  // sleep(1000);
  // cx.font = "30px Comic Sans MS"
  // cx.fillStyle = "red";
  // cx.fillText("wowzerz", 10, 50);
  // console.log('draw1');
  // cx.closePath();

  // cx.beginPath();
  // sleep(1000);
  // cx.clearRect(0,0, width, height);
  // console.log("clear2");
  // cx.fillText("wizzy wozerz", 20, 60);
  // console.log("draw2");


})
