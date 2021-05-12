var image52 = document.getElementById("image52");
var image52ctx = image52.getContext("2d");
var image52img = new Image()
image52img.onload = function() {
  image52ctx.drawImage(image52img, 0, 1203, 720, 1098, 0, 0, 720, 1098);
};
image52img.src = 'https://tritinia.com/tempmanga/beta/images/6.jpg';