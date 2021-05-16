var image4 = document.getElementById("image4");
var image4ctx = image4.getContext("2d");
var image4img = new Image()
image4img.onload = function() {
  image4ctx.drawImage(image4img, 0, 3899, 720, 1098, 0, 0, 720, 1098);
};
image4img.src = 'https://tritinia.com/tempmanga/beta/images/1.jpg';