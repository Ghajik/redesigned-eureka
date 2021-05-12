var image25 = document.getElementById("image25");
var image25ctx = image25.getContext("2d");
var image25img = new Image()
image25img.onload = function() {
  image25ctx.drawImage(image25img, 0, 5392, 720, 1098, 0, 0, 720, 1098);
};
image25img.src = 'https://tritinia.com/tempmanga/beta/images/3.jpg';