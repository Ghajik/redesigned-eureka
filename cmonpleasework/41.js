var image42 = document.getElementById("image42");
var image42ctx = image42.getContext("2d");
var image42img = new Image()
image42img.onload = function() {
  image42ctx.drawImage(image42img, 0, 1348, 720, 1098, 0, 0, 720, 1098);
};
image42img.src = 'https://tritinia.com/tempmanga/beta/images/5.jpg';