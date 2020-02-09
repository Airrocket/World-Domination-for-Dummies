function start() {
  $('#start').hide();
  $('.gameText').show();
};

var form = document.getElementById('rateInput');
var text = document.getElementById('text');
var slideshow = document.getElementById('slideshow');

function inputValue() {
  if (form.value !== "") {
    if (form.value <= 10 && form.value >= 1) {
      if (imgIndex < images.length) {
        slideshow.style.display = "";
        changeImg();
        text.innerHTML = form.value;
        form.value = "";
      } else {
        console.log('done')
        form.value = "";
        text.innerHTML = "done"
      };
    } else {
      text.innerHTML = ("Please input a number between 1 and 10")
      form.value = "";
    }
  } else {
    text.innerHTML = ("Please input a number between 1 and 10")
    form.value = "";
  };
}

$(document).ready(() => {
  $('.gameText').hide();

  images = [
    {"name":"img1", "src":"https://phinest.com/wp-content/uploads/2017/02/Maya_Beano_Phinest_4-800x800.jpg"},
    {"name":"img2", "src":"https://www.pixel-creation.com/wp-content/uploads/3d-nature-wallpapers-wallpaper-cave-800x800.jpg"},
    {"name":"img3", "src":"https://img00.deviantart.net/5fdc/i/2009/162/9/0/nature_stock_14_by_dezzan_stock.jpg"},
    {"name":"img4", "src":"https://www.secretescapes.com/inlombardia/img/content/link--nature.jpg"},
    {"name":"img5", "src":"https://www.mappingmegan.com/wp-content/uploads/2017/04/sunset-2177324_1920-001.jpg"}
  ];
  imgIndex = 0;

  function changeImg(){
    document.getElementById("slideshow").src = images[imgIndex].src;
    imgIndex++
  }
  changeImg()

})
