var image24 = document.getElementById("image24");
var image24ctx = image24.getContext("2d");
var image24img = new Image()
image24img.onload = function() {
  image24ctx.drawImage(image24img, 0, 4094, 720, 1098, 0, 0, 720, 1098);
};
image24img.src = 'https://tritinia.com/tempmanga/beta/images/3.jpg';