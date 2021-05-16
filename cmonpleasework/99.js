var image100 = document.getElementById("image100");
var image100ctx = image100.getContext("2d");
var image100img = new Image()
image100img.onload = function() {
  image100ctx.drawImage(image100img, 0, 11892, 720, 1098, 0, 0, 720, 1098);
};
image100img.src = 'https://tritinia.com/tempmanga/beta/images/10.jpg';