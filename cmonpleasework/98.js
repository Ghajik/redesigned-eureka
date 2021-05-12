var image99 = document.getElementById("image99");
var image99ctx = image99.getContext("2d");
var image99img = new Image()
image99img.onload = function() {
  image99ctx.drawImage(image99img, 0, 10594, 720, 1098, 0, 0, 720, 1098);
};
image99img.src = 'https://tritinia.com/tempmanga/beta/images/10.jpg';