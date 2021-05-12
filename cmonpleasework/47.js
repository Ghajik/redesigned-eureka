var image48 = document.getElementById("image48");
var image48ctx = image48.getContext("2d");
var image48img = new Image()
image48img.onload = function() {
  image48ctx.drawImage(image48img, 0, 9436, 720, 1098, 0, 0, 720, 1098);
};
image48img.src = 'https://tritinia.com/tempmanga/beta/images/5.jpg';