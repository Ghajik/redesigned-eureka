var image30 = document.getElementById("image30");
var image30ctx = image30.getContext("2d");
var image30img = new Image()
image30img.onload = function() {
  image30ctx.drawImage(image30img, 0, 11842, 720, 1098, 0, 0, 720, 1098);
};
image30img.src = 'https://tritinia.com/tempmanga/beta/images/3.jpg';