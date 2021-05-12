var image64 = document.getElementById("image64");
var image64ctx = image64.getContext("2d");
var image64img = new Image()
image64img.onload = function() {
  image64ctx.drawImage(image64img, 0, 4044, 720, 1098, 0, 0, 720, 1098);
};
image64img.src = 'https://tritinia.com/tempmanga/beta/images/7.jpg';