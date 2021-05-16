var image19 = document.getElementById("image19");
var image19ctx = image19.getContext("2d");
var image19img = new Image()
image19img.onload = function() {
  image19ctx.drawImage(image19img, 0, 10884, 720, 1098, 0, 0, 720, 1098);
};
image19img.src = 'https://tritinia.com/tempmanga/beta/images/2.jpg';