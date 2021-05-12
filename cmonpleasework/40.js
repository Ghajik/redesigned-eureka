var image41 = document.getElementById("image41");
var image41ctx = image41.getContext("2d");
var image41img = new Image()
image41img.onload = function() {
  image41ctx.drawImage(image41img, 0, 0, 720, 1098, 0, 0, 720, 1098);
};
image41img.src = 'https://tritinia.com/tempmanga/beta/images/5.jpg';