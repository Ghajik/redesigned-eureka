var image90 = document.getElementById("image90");
var image90ctx = image90.getContext("2d");
var image90img = new Image()
image90img.onload = function() {
  image90ctx.drawImage(image90img, 0, 11697, 720, 1098, 0, 0, 720, 1098);
};
image90img.src = 'https://tritinia.com/tempmanga/beta/images/9.jpg';