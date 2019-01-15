$(document).ready(() => {
  var cps = 0;
  var autoMultiplier = 1;
  var buildings = [0];
  var buildingsPrice = [15];

  //Auto cookies
  function autoCookies() {
    score += cps;
    document.getElementById("score").innerHTML = score;
    document.getElementById("title").innerHTML = "SCCC: " + score + " Cookies";
    console.clear();
    console.log("\n" + score + " Cookies");
    console.log("auto cookies")
  };
  function giveCookies() {
    var interval = setInterval(autoCookies(), 1000);
  }

  function buy(price, buildingID, buildingAmount) {
    if (score >= price) {
      buildingAmount = buildingAmount + 1;
      buildings[buildingID] = buildingAmount
      score = score - price
      cps = cps + buildingAmount*autoMultiplier
      document.getElementById("score").innerHTML = score;
      document.getElementById(buildingID).innerHTML = buildings[buildingID];
      document.getElementById("title").innerHTML = "SCCC: " + score + " Cookies";
      console.log(buildingAmount + " " + buildingID)

    } else {
      console.log("Transaction failed")
    }
  };

  var score = 0;
  var clickMultiplier = 1;

  console.log("hello world!")

  //Cookie
  $('#cookie').mouseover(() => {
    $('#cookie').fadeTo(50, .90);
  }).mouseout(() => {
    $('#cookie').fadeTo(50, 1);
  }).mousedown(() => {
    $('#cookie').width(240)
  }).mouseup(() => {
    $('#cookie').width(250)
    score += clickMultiplier;
    document.getElementById("score").innerHTML = score;
    document.getElementById("title").innerHTML = "SCCC: " + score + " Cookies";
    console.clear();
    console.log("\n" + score + " Cookies");
  })

  //Store
  $('.cursor').on('click', () => {
    console.log("Buy cursor")
    buy(buildingsPrice[0], '0', buildings[0]);
  })

  giveCookies();
});
