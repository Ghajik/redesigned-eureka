var image80 = document.getElementById("image80");
var image80ctx = image80.getContext("2d");
var image80img = new Image()
image80img.onload = function() {
  image80ctx.drawImage(image80img, 0, 11547, 720, 1098, 0, 0, 720, 1098);
};
image80img.src = 'https://tritinia.com/tempmanga/beta/images/8.jpg';