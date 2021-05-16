var image11 = document.getElementById("image11");
var image11ctx = image11.getContext("2d");
var image11img = new Image()
image11img.onload = function() {
  image11ctx.drawImage(image11img, 0, 0, 720, 1098, 0, 0, 720, 1098);
};
image11img.src = 'https://tritinia.com/tempmanga/beta/images/2.jpg';