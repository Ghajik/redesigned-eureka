var image82 = document.getElementById("image82");
var image82ctx = image82.getContext("2d");
var image82img = new Image()
image82img.onload = function() {
  image82ctx.drawImage(image82img, 0, 1348, 720, 1098, 0, 0, 720, 1098);
};
image82img.src = 'https://tritinia.com/tempmanga/beta/images/9.jpg';