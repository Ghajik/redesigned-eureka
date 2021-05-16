var image7 = document.getElementById("image7");
var image7ctx = image7.getContext("2d");
var image7img = new Image()
image7img.onload = function() {
  image7ctx.drawImage(image7img, 0, 7793, 720, 1098, 0, 0, 720, 1098);
};
image7img.src = 'https://tritinia.com/tempmanga/beta/images/1.jpg';