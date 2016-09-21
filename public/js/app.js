(function iife(doc) {
  var color = 0x000000;
  doc.addEventListener("DOMContentLoaded", main);

  function main(event) {
    var hex = doc.getElementById('hex');
    var rgb = doc.getElementById('rgb');
    hex.addEventListener('change', update);
    rgb.addEventListener('change', update);
  }

  function update(event) {
    var input = event.target.value;
    if (input.length == 6) {
      if (parseInt(input, 16) <= 0xffffff) {
        set(input);
      }
    }
  }

  function set(color) {
    var hex = doc.getElementById('hex');
    var rgb = doc.getElementById('rgb');
    var bg = doc.getElementsByClassName('jumbotron')[0];

    bg.style.backgroundColor = "#" + color;
    hex.value = "#" + color;
    rgb.value = "rgb(" +
      parseInt(color.slice(0,2), 16) + ", " +
      parseInt(color.slice(2,4), 16) + ", " +
      parseInt(color.slice(4,6), 16) + ")" ;
  }

})(document);
