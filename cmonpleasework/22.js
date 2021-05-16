var image23 = document.getElementById("image23");
var image23ctx = image23.getContext("2d");
var image23img = new Image()
image23img.onload = function() {
  image23ctx.drawImage(image23img, 0, 2746, 720, 1098, 0, 0, 720, 1098);
};
image23img.src = 'https://tritinia.com/tempmanga/beta/images/3.jpg';