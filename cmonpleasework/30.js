var image31 = document.getElementById("image31");
var image31ctx = image31.getContext("2d");
var image31img = new Image()
image31img.onload = function() {
  image31ctx.drawImage(image31img, 0, 0, 720, 1098, 0, 0, 720, 1098);
};
image31img.src = 'https://tritinia.com/tempmanga/beta/images/4.jpg';