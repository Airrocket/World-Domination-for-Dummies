$(document).ready(() => {
  function rotate (arrow) {
    $(arrow).rotate({animateTo:(90-$(arrow).getRotateAngle()), duration: 600});
  }
  $('.fakeimg').slideUp({duration:350});
  $('.experimentCard').slideUp();
  $('.wipCard').slideUp();
  $('.gameCard').slideDown();
  // $('#account').animate({width:'toggle'});
  $('#gamesTab').css('background-color', '#e8e8e8');

  //Left cards
  //Types bar
  $('#gamesTab').on('click', () => {
    $('.experimentCard').slideUp();
    $('.wipCard').slideUp();
    $('.gameCard').slideDown();
    $('.typeMenu').css('background-color', 'white')
    // $('.userMenu').css('background-color', 'white')
    $('#gamesTab').css('background-color', '#e8e8e8');
  })

  $('#wipTab').on('click', () => {
    $('.gameCard').slideUp();
    $('.wipCard').slideDown();
    $('.experimentCard').slideUp();
    $('.typeMenu').css('background-color', 'white')
    // $('.userMenu').css('background-color', 'white')
    $('#wipTab').css('background-color', '#e8e8e8');
  })

  $('#experimentsTab').on('click', () => {
    $('.gameCard').slideUp();
    $('.wipCard').slideUp();
    $('.experimentCard').slideDown();
    $('.typeMenu').css('background-color', 'white')
    // $('.userMenu').css('background-color', 'white')
    $('#experimentsTab').css('background-color', '#e8e8e8');
  })

  $('#allTab').on('click', () => {
    $('.gameCard').slideDown();
    $('.wipCard').slideDown();
    $('.experimentCard').slideDown();
    $('.typeMenu').css('background-color', 'white')
    // $('.userMenu').css('background-color', 'white')
    $('#allTab').css('background-color', '#e8e8e8');
  })

  // $('#logInOut').on('click', () => {
  //   $('.gameCard').slideUp();
  //   $('.wipCard').slideUp();
  //   $('.experimentCard').slideUp();
  //   $('.typeMenu').css('background-color', 'white')
  //   $('.userMenu').css('background-color', 'white')
  //   $('#logInOut').css('background-color', '#e8e8e8');
  //   $('#account').animate({width:'toggle'});
  // })
  //
  // $('#account').on('click', () => {
  //   $('.gameCard').slideUp();
  //   $('.wipCard').slideUp();
  //   $('.experimentCard').slideUp();
  //   $('.typeMenu').css('background-color', 'white')
  //   $('.userMenu').css('background-color', 'white')
  //   $('#account').css('background-color', '#e8e8e8');
  // })

  //breakout card//
  $('#arrow-1').on('click', () => {
    $('#breakout').slideToggle({duration:600});
    rotate('#arrow-1');
  })

  //anime roulette card//
  $('#arrow-2').on('click', () => {
    $('#animeRoulette').slideToggle({duration:600});
    rotate('#arrow-2');
  })

  //wdfd card//
  $('#arrow-3').on('click', () => {
    $('#wdfd').slideToggle({duration:600});
    rotate('#arrow-3');
  })

  //minesweeper card//
  $('#arrow-4').on('click', () => {
    $('#minesweeper').slideToggle({duration:600});
    rotate('#arrow-4');
  })

  //coinflip card//
  $('#arrow-5').on('click', () => {
    $('#coinflip').slideToggle({duration:600});
    rotate('#arrow-5');
  })

  //cookies card//
  $('#arrow-6').on('click', () => {
    $('#cookies').slideToggle({duration:600});
    rotate('#arrow-6');
  })

  //linearExpressions card//
  $('#arrow-7').on('click', () => {
    $('#linearExpressions').slideToggle({duration:600});
    rotate('#arrow-7');
  })


  //Right cards
  //1st card//
  $('#r-arrow-1').on('click', () => {
    $('#Rinfo-1').slideToggle({duration:600});
    rotate('#r-arrow-1');
  })

  //2nd card//
  $('#r-arrow-2').on('click', () => {
    $('#Rinfo-2').slideToggle({duration:600});
    rotate('#r-arrow-2');
  })

  //3rd card//
  $('#r-arrow-3').on('click', () => {
    $('#Rinfo-3').slideToggle({duration:600});
    rotate('#r-arrow-3');
  })
});
