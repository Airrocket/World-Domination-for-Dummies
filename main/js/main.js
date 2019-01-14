$(document).ready(() => {
  var value = 0;
  console.log(value);
  $('.fakeimg').slideUp({duration:350});

  //Left cards
  //anime roulette card//
  $('#arrow-1').on('click', () => {
    $('#animeRoulette').slideToggle({duration:600});
    if (value == 0) {
      value = 90;
      $('#arrow-1').rotate({animateTo:value, duration: 600});
    } else if (value == 90) {
      value = 0;
      $('#arrow-1').rotate({animateTo:value, duration: 600});
    }
  })

  //wdfd card//
  $('#arrow-2').on('click', () => {
    $('#wdfd').slideToggle({duration:600});
    if (value == 0) {
      value = 90;
      $('#arrow-2').rotate({animateTo:value, duration: 600});
    } else if (value == 90) {
      value = 0;
      $('#arrow-2').rotate({animateTo:value, duration: 600});
    }
  })

  //breakout card//
  $('#arrow-3').on('click', () => {
    $('#breakout').slideToggle({duration:600});
    if (value == 0) {
      value = 90;
      $('#arrow-3').rotate({animateTo:value, duration: 600, duration: 400});
    } else if (value == 90) {
      value = 0;
      $('#arrow-3').rotate({animateTo:value, duration: 600, duration: 400});
    }
  })

  //minesweeper card//
  $('#arrow-4').on('click', () => {
    $('#minesweeper').slideToggle({duration:600});
    if (value == 0) {
      value = 90;
      $('#arrow-4').rotate({animateTo:value, duration: 600, duration: 400});
    } else if (value == 90) {
      value = 0;
      $('#arrow-4').rotate({animateTo:value, duration: 600, duration: 400});
    }
  })


  //Right cards
  //1st card//
  $('#r-arrow-1').on('click', () => {
    $('#Rinfo-1').slideToggle({duration:600});
    if (value == 0) {
      value = 90;
      $('#r-arrow-1').rotate({animateTo:value, duration: 600, duration: 400});
    } else if (value == 90) {
      value = 0;
      $('#r-arrow-1').rotate({animateTo:value, duration: 600, duration: 400});
    }
  })

  //2nd card//
  $('#r-arrow-2').on('click', () => {
    $('#Rinfo-2').slideToggle({duration:600});
    if (value == 0) {
      value = 90;
      $('#r-arrow-2').rotate({animateTo:value, duration: 600, duration: 400});
    } else if (value == 90) {
      value = 0;
      $('#r-arrow-2').rotate({animateTo:value, duration: 600, duration: 400});
    }
  })

  //3rd card//
  $('#r-arrow-3').on('click', () => {
    $('#Rinfo-3').slideToggle({duration:600});
    if (value == 0) {
      value = 90;
      $('#r-arrow-3').rotate({animateTo:value, duration: 600});
    } else if (value == 90) {
      value = 0;
      $('#r-arrow-3').rotate({animateTo:value, duration: 600});
    }
  })
});
