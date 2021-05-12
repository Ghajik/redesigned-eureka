var image49 = document.getElementById("image49");
var image49ctx = image49.getContext("2d");
var image49img = new Image()
image49img.onload = function() {
  image49ctx.drawImage(image49img, 0, 10784, 720, 1098, 0, 0, 720, 1098);
};
image49img.src = 'https://tritinia.com/tempmanga/beta/images/5.jpg';