var image51 = document.getElementById("image51");
var image51ctx = image51.getContext("2d");
var image51img = new Image()
image51img.onload = function() {
  image51ctx.drawImage(image51img, 0, 0, 720, 1098, 0, 0, 720, 1098);
};
image51img.src = 'https://tritinia.com/tempmanga/beta/images/6.jpg';