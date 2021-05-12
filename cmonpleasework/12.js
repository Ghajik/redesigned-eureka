var image13 = document.getElementById("image13");
var image13ctx = image13.getContext("2d");
var image13img = new Image()
image13img.onload = function() {
  image13ctx.drawImage(image13img, 0, 2746, 720, 1098, 0, 0, 720, 1098);
};
image13img.src = 'https://tritinia.com/tempmanga/beta/images/2.jpg';