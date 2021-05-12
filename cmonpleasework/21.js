var image22 = document.getElementById("image22");
var image22ctx = image22.getContext("2d");
var image22img = new Image()
image22img.onload = function() {
  image22ctx.drawImage(image22img, 0, 1348, 720, 1098, 0, 0, 720, 1098);
};
image22img.src = 'https://tritinia.com/tempmanga/beta/images/3.jpg';