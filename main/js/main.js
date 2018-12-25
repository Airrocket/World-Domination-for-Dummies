$(document).ready(() => {
  var value = 0;
  $('.fakeimg').slideUp();

  //anime roulette card//
  $('#arrow-1').on('click', () => {
    $('#animeRoulette').slideToggle();
    if (value == 0) {
      value = 90;
      $('#arrow-1').rotate({animateTo:value});
    } else if (value == 90) {
      value = 0;
      $('#arrow-1').rotate({animateTo:value});
    }
  })

  //wdfd card//
  $('#arrow-2').on('click', () => {
    $('#wdfd').slideToggle();
    if (value == 0) {
      value = 90;
      $('#arrow-2').rotate({animateTo:value});
    } else if (value == 90) {
      value = 0;
      $('#arrow-2').rotate({animateTo:value});
    }
  })

  //minesweeper card//
  $('#arrow-3').on('click', () => {
    $('#minesweeper').slideToggle();
    if (value == 0) {
      value = 90;
      $('#arrow-3').rotate({animateTo:value});
    } else if (value == 90) {
      value = 0;
      $('#arrow-3').rotate({animateTo:value});
    }
  })
});
