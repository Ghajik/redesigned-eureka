var image9 = document.getElementById("image9");
var image9ctx = image9.getContext("2d");
var image9img = new Image()
image9img.onload = function() {
  image9ctx.drawImage(image9img, 0, 10589, 720, 1098, 0, 0, 720, 1098);
};
image9img.src = 'https://tritinia.com/tempmanga/beta/images/1.jpg';