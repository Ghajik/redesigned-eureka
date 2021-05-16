var image16 = document.getElementById("image16");
var image16ctx = image16.getContext("2d");
var image16img = new Image()
image16img.onload = function() {
  image16ctx.drawImage(image16img, 0, 6790, 720, 1098, 0, 0, 720, 1098);
};
image16img.src = 'https://tritinia.com/tempmanga/beta/images/2.jpg';