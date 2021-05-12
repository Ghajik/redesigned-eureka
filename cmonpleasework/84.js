var image85 = document.getElementById("image85");
var image85ctx = image85.getContext("2d");
var image85img = new Image()
image85img.onload = function() {
  image85ctx.drawImage(image85img, 0, 5052, 720, 1098, 0, 0, 720, 1098);
};
image85img.src = 'https://tritinia.com/tempmanga/beta/images/9.jpg';