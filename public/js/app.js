(function iife(doc) {
  var color = 0x000000;
  doc.addEventListener("DOMContentLoaded", main);

  function main(event) {
    var hex = doc.getElementById('hex');
    var rgb = doc.getElementById('rgb');
    hex.addEventListener('change', hexNormalize);
    rgb.addEventListener('change', rgbNormalize);
  }

  function hexNormalize(event) {
    var input = event.target.value.replace(/\s*/g,"");
    var regex = /[0-9a-fA-F]{6}/
    if (!regex.test(input)) {
      console.warn("Input invalid:", input);
      return null;
    }

    var hexValue = regex.exec(input)[0];
    if (hexValue && parseInt(hexValue, 16) <= 0xffffff) {
      set(hexValue);
    }
  }

  function rgbNormalize(event) {
    var input = event.target.value.replace(/\s*/g,"");
    if (!/^rgb\(\d{1,3},\d{1,3},\d{1,3}\)$/.test(input)) {
      console.warn("Input invalid:", input);
      return null;
    }

    var regex = /\d{1,3}/g;
    var regexReturn;
    var rgb = [];

    while ((regexReturn = regex.exec(input)) !== null) {
      if (regexReturn[0] > -1 && regexReturn[0] < 256)
        rgb.push(regexReturn[0]);
    }

    var hex = hexize(rgb[0]) + hexize(rgb[1]) + hexize(rgb[2]);
    set(hex);

    function hexize(c) {
      c = Number(c, 10).toString(16);
      c = c.length < 2 ? "0" + c : c ;
      return c;
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
