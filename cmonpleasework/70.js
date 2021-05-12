var image71 = document.getElementById("image71");
var image71ctx = image71.getContext("2d");
var image71img = new Image()
image71img.onload = function() {
  image71ctx.drawImage(image71img, 0, 0, 720, 1098, 0, 0, 720, 1098);
};
image71img.src = 'https://tritinia.com/tempmanga/beta/images/8.jpg';