var image20 = document.getElementById("image20");
var image20ctx = image20.getContext("2d");
var image20img = new Image()
image20img.onload = function() {
  image20ctx.drawImage(image20img, 0, 12182, 720, 1098, 0, 0, 720, 1098);
};
image20img.src = 'https://tritinia.com/tempmanga/beta/images/2.jpg';