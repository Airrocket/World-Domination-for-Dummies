$(document).ready(() => {
  var cookies = 0;
  var interval;
  var clickMultiplier = 1;
  var cps = 0;
  var autoMultiplier = 1;
  var buildings = [0, 0];
  var buildingsPrice = [15, 111];
  var buildingCps = [1, 5]

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
    document.getElementById("title").innerHTML = "GCC: " + cookies + " Cookies";
    // console.clear();
    // console.log("\n" + cookies + " Cookies");
    // console.log("CPS: " + cps)
    // console.log("auto cookies")
  };

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
      document.getElementById("title").innerHTML = "SCCC: " + cookies + " Cookies";
      document.getElementById("cps").innerHTML = cps;
      document.getElementById(buildingID + "price").innerHTML = buildingsPrice[buildingID];
      writeCookies(buildings, cookies);

    } else {
      console.log("Transaction failed")
    }
  };
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
    cookies += clickMultiplier;
    document.getElementById("cookies").innerHTML = cookies;
    document.getElementById("title").innerHTML = "SCCC: " + cookies + " Cookies";
    //console.clear();
    console.log("\n" + cookies + " Cookies");
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

  readCookies();
  interval = setInterval(autoCookies, 1000);
});
