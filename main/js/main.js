$(document).ready(() => {
  function rotate (arrow) {
    $(arrow).rotate({animateTo:(90-$(arrow).getRotateAngle()), duration: 600});
  }
  $('.fakeimg').slideUp({duration:350});
  $('.experimentCard').hide();
  $('.gameCard').show();

  //Left cards
  //Games/Experiments bar
  $('#gamesTab').on('click', () => {
    $('.experimentCard').slideUp();
    $('.gameCard').slideDown();
    console.log("Games Tab");
  })

  $('#experimentsTab').on('click', () => {
    $('.gameCard').slideUp();
    $('.experimentCard').slideDown();
    console.log("Experiments Tab");
  })

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
