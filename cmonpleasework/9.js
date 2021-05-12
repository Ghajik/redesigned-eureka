var image10 = document.getElementById("image10");
var image10ctx = image10.getContext("2d");
var image10img = new Image()
image10img.onload = function() {
  image10ctx.drawImage(image10img, 0, 11887, 720, 1098, 0, 0, 720, 1098);
};
image10img.src = 'https://tritinia.com/tempmanga/beta/images/1.jpg';