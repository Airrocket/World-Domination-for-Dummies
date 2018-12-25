$(document).ready(() => {
  $('.fakeimg').slideUp();

  $('#arrow-1').on('click', () => {
    $('#animeRoulette').slideToggle();
  })

  $('#arrow-2').on('click', () => {
    $('#wdfd').slideToggle();
  })

  $('#arrow-3').on('click', () => {
    $('#minesweeper').slideToggle();
  })
});
