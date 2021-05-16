var image15 = document.getElementById("image15");
var image15ctx = image15.getContext("2d");
var image15img = new Image()
image15img.onload = function() {
  image15ctx.drawImage(image15img, 0, 5492, 720, 1098, 0, 0, 720, 1098);
};
image15img.src = 'https://tritinia.com/tempmanga/beta/images/2.jpg';