var image21 = document.getElementById("image21");
var image21ctx = image21.getContext("2d");
var image21img = new Image()
image21img.onload = function() {
  image21ctx.drawImage(image21img, 0, 0, 720, 1098, 0, 0, 720, 1098);
};
image21img.src = 'https://tritinia.com/tempmanga/beta/images/3.jpg';