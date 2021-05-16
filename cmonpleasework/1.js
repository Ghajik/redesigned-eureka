var image2 = document.getElementById("image2");
var image2ctx = image2.getContext("2d");
var image2img = new Image()
image2img.onload = function() {
  image2ctx.drawImage(image2img, 0, 1203, 720, 1098, 0, 0, 720, 1098);
};
image2img.src = 'https://tritinia.com/tempmanga/beta/images/1.jpg';