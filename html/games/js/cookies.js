$(document).ready(() => {
  var cookies = 0;
  var interval;
  var clickMultiplier = 1;
  var cps = 0;
  var autoMultiplier = 1;
  var buildings = [0, 0, 0];
  var buildingsPrice = [15, 111, 1000];
  var buildingCps = [1, 5, 25]

  //Browser cookie writer
  function writeCookies (buildings, cookies) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + 5*365);
    var bcValue = buildings.join(".") + "." + cookies
    document.cookie = "gameData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "gameData=" + bcValue + "; expires=" + exdate + "; path=/";
    console.log("Cookies written with value: " + bcValue);
  };

  //Browser cookie reader
  function readCookies () {
    var bcReadValue = document.cookie
    console.log(bcReadValue);
  };

  //Auto cookies
  function autoCookies() {
    cookies += cps;
    document.getElementById("cookies").innerHTML = cookies;
    document.getElementById("title").innerHTML = "GCG: " + cookies + " Cookies";
    // console.clear();
    // console.log("\n" + cookies + " Cookies");
    // console.log("CPS: " + cps)
    // console.log("auto cookies")
  };

  //buy
  function buy(price, buildingID, buildingAmount) {
    if (cookies >= price) {
      buildingAmount += 1;
      buildings[buildingID] = buildingAmount
      cookies = cookies - price
      cps = cps + buildingCps[buildingID]
      console.log(buildingAmount + " of " + buildingID + " at " + buildingsPrice[buildingID]);
      buildingsPrice[buildingID] = Math.ceil(price*1.33);
      document.getElementById("cookies").innerHTML = cookies;
      document.getElementById(buildingID).innerHTML = buildings[buildingID];
      document.getElementById("title").innerHTML = "GCG: " + cookies + " Cookies";
      document.getElementById("cps").innerHTML = cps;
      document.getElementById(buildingID + "price").innerHTML = buildingsPrice[buildingID];
      writeCookies(buildings, cookies);

    } else {
      console.log("Transaction failed")
    }
  };

  //Cookie
  $('#cookie').mouseover(() => {
    $('#cookie').fadeTo(50, .90);
  }).mouseout(() => {
    $('#cookie').fadeTo(50, 1);
  }).mousedown(() => {
    $('#cookie').width(240)
  }).mouseup(() => {
    $('#cookie').width(250)
    cookies += clickMultiplier;
    document.getElementById("cookies").innerHTML = cookies;
    document.getElementById("title").innerHTML = "GCG: " + cookies + " Cookies";
    //console.clear();
    console.log("\n" + cookies + " Cookies");
  })

  //Store
  $('.pin').on('click', () => {
    console.log("Buy pin")
    buy(buildingsPrice[0], '0', buildings[0]);
  });
  $('.oven').on('click', () => {
    console.log("Buy oven")
    buy(buildingsPrice[1], '1', buildings[1])
  });
  $('.factory').on('click', () => {
    console.log("Buy factory")
    buy(buildingsPrice[2], '2', buildings[2])
  });

  readCookies();
  interval = setInterval(autoCookies, 1000);
});
