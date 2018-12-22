code: function() {


  function grid(size, x, y) {
    for (var o = 0; o <= y; o++) {
      for (var i = 0; i <= x; i++) {
        var square = new Rect(0+i*(size+(size*.2)), 0+o*(size+(size*.2)), size, size);
        square.addTo(stage);
        square.fill('blue');
      };
    };
  };
  grid(30, x, 9);
  }
