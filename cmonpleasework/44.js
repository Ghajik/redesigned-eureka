var image45 = document.getElementById("image45");
var image45ctx = image45.getContext("2d");
var image45img = new Image()
image45img.onload = function() {
  image45ctx.drawImage(image45img, 0, 5392, 720, 1098, 0, 0, 720, 1098);
};
image45img.src = 'https://tritinia.com/tempmanga/beta/images/5.jpg';