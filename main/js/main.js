$(document).ready(() => {
  var rotation = 0;
  var value = 0;
  $('.fakeimg').slideUp();

  //anime roulette card//
  $('#arrow-1').on('click', () => {
    $('#animeRoulette').slideToggle();
    if (rotation == 0) {
      value = 90;
      $('#arrow-1').rotate({animateTo:value});
      rotation = 90;
    } else if (rotation == 90) {
      value = 0;
      $('#arrow-1').rotate({animateTo:value});
      rotation = 0;
    }
  })

  //wdfd card//
  $('#arrow-2').on('click', () => {
    $('#wdfd').slideToggle();
    if (rotation == 0) {
      value = 90;
      $('#arrow-2').rotate({animateTo:value});
      rotation = 90;
    } else if (rotation == 90) {
      value = 0;
      $('#arrow-2').rotate({animateTo:value});
      rotation = 0;
    }
  })

  //minesweeper card//
  $('#arrow-3').on('click', () => {
    $('#minesweeper').slideToggle();
    if (rotation == 0) {
      value = 90;
      $('#arrow-3').rotate({animateTo:value});
      rotation = 90;
    } else if (rotation == 90) {
      value = 0;
      $('#arrow-3').rotate({animateTo:value});
      rotation = 0;
    }
  })
});
