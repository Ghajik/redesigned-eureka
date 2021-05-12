var image3 = document.getElementById("image3");
var image3ctx = image3.getContext("2d");
var image3img = new Image()
image3img.onload = function() {
  image3ctx.drawImage(image3img, 0, 2601, 720, 1098, 0, 0, 720, 1098);
};
image3img.src = 'https://tritinia.com/tempmanga/beta/images/1.jpg';