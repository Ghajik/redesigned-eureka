var image98 = document.getElementById("image98");
var image98ctx = image98.getContext("2d");
var image98img = new Image()
image98img.onload = function() {
  image98ctx.drawImage(image98img, 0, 9296, 720, 1098, 0, 0, 720, 1098);
};
image98img.src = 'https://tritinia.com/tempmanga/beta/images/10.jpg';