var image75 = document.getElementById("image75");
var image75ctx = image75.getContext("2d");
var image75img = new Image()
image75img.onload = function() {
  image75ctx.drawImage(image75img, 0, 5242, 720, 1098, 0, 0, 720, 1098);
};
image75img.src = 'https://tritinia.com/tempmanga/beta/images/8.jpg';