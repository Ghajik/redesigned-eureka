var image1 = document.getElementById("image1");
var image1ctx = image1.getContext("2d");
var image1img = new Image()
image1img.onload = function() {
  image1ctx.drawImage(image1img, 0, 0, 720, 1098, 0, 0, 720, 1098);
};
image1img.src = 'https://tritinia.com/tempmanga/beta/images/1.jpg';