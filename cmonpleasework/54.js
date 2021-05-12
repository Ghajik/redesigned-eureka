var image55 = document.getElementById("image55");
var image55ctx = image55.getContext("2d");
var image55img = new Image()
image55img.onload = function() {
  image55ctx.drawImage(image55img, 0, 5002, 720, 1098, 0, 0, 720, 1098);
};
image55img.src = 'https://tritinia.com/tempmanga/beta/images/6.jpg';