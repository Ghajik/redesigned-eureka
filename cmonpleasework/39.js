var image40 = document.getElementById("image40");
var image40ctx = image40.getContext("2d");
var image40img = new Image()
image40img.onload = function() {
  image40ctx.drawImage(image40img, 0, 11747, 720, 1098, 0, 0, 720, 1098);
};
image40img.src = 'https://tritinia.com/tempmanga/beta/images/4.jpg';