var image65 = document.getElementById("image65");
var image65ctx = image65.getContext("2d");
var image65img = new Image()
image65img.onload = function() {
  image65ctx.drawImage(image65img, 0, 5247, 720, 1098, 0, 0, 720, 1098);
};
image65img.src = 'https://tritinia.com/tempmanga/beta/images/7.jpg';