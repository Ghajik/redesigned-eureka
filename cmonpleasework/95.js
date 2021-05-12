var image96 = document.getElementById("image96");
var image96ctx = image96.getContext("2d");
var image96img = new Image()
image96img.onload = function() {
  image96ctx.drawImage(image96img, 0, 6745, 720, 1098, 0, 0, 720, 1098);
};
image96img.src = 'https://tritinia.com/tempmanga/beta/images/10.jpg';