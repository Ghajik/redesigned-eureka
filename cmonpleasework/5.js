var image6 = document.getElementById("image6");
var image6ctx = image6.getContext("2d");
var image6img = new Image()
image6img.onload = function() {
  image6ctx.drawImage(image6img, 0, 6495, 720, 1098, 0, 0, 720, 1098);
};
image6img.src = 'https://tritinia.com/tempmanga/beta/images/1.jpg';