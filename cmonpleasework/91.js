var image92 = document.getElementById("image92");
var image92ctx = image92.getContext("2d");
var image92img = new Image()
image92img.onload = function() {
  image92ctx.drawImage(image92img, 0, 1398, 720, 1098, 0, 0, 720, 1098);
};
image92img.src = 'https://tritinia.com/tempmanga/beta/images/10.jpg';