var image70 = document.getElementById("image70");
var image70ctx = image70.getContext("2d");
var image70img = new Image()
image70img.onload = function() {
  image70ctx.drawImage(image70img, 0, 11647, 720, 1098, 0, 0, 720, 1098);
};
image70img.src = 'https://tritinia.com/tempmanga/beta/images/7.jpg';