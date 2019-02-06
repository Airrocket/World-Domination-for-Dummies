$(document).ready(() => {
  var interval;
  var cps = 0;
  var autoMultiplier = 1;
  var buildings = [0, 0];
  var buildingsPrice = [15, 111];
  var buildingCps = [1, 5]

  //Auto cookies
  function autoCookies() {
    score += cps;
    document.getElementById("score").innerHTML = score;
    document.getElementById("title").innerHTML = "SCCC: " + score + " Cookies";
    console.clear();
    console.log("\n" + score + " Cookies");
    console.log("CPS: " + cps)
    console.log("auto cookies")
  };

  function buy(price, buildingID, buildingAmount) {
    if (score >= price) {
      buildingAmount = buildingAmount + 1;
      buildings[buildingID] = buildingAmount
      score = score - price
      cps = cps + buildingCps[buildingID]
      buildingsPrice[buildingID] = Math.ceil(price*1.33);
      document.getElementById("score").innerHTML = score;
      document.getElementById(buildingID).innerHTML = buildings[buildingID];
      document.getElementById("title").innerHTML = "SCCC: " + score + " Cookies";
      console.log(buildingAmount + " " + buildingID + " at " + buildingsPrice[buildingID]);
      document.getElementById("cps").innerHTML = cps;
      document.getElementById(buildingID + "price").innerHTML = buildingsPrice[buildingID];

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
    //console.clear();
    console.log("\n" + score + " Cookies");
  })

  //Store
  $('.cursor').on('click', () => {
    console.log("Buy cursor")
    buy(buildingsPrice[0], '0', buildings[0]);
  })
  $('.grandpa').on('click', () => {
    console.log("Buy grandpa")
    buy(buildingsPrice[1], '1', buildings[1])
  })

  interval = setInterval(autoCookies, 1000);
});
