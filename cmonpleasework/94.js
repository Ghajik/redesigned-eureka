var image95 = document.getElementById("image95");
var image95ctx = image95.getContext("2d");
var image95img = new Image()
image95img.onload = function() {
  image95ctx.drawImage(image95img, 0, 5542, 720, 1098, 0, 0, 720, 1098);
};
image95img.src = 'https://tritinia.com/tempmanga/beta/images/10.jpg';