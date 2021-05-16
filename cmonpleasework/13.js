var image14 = document.getElementById("image14");
var image14ctx = image14.getContext("2d");
var image14img = new Image()
image14img.onload = function() {
  image14ctx.drawImage(image14img, 0, 4144, 720, 1098, 0, 0, 720, 1098);
};
image14img.src = 'https://tritinia.com/tempmanga/beta/images/2.jpg';