var image86 = document.getElementById("image86");
var image86ctx = image86.getContext("2d");
var image86img = new Image()
image86img.onload = function() {
  image86ctx.drawImage(image86img, 0, 6450, 720, 1098, 0, 0, 720, 1098);
};
image86img.src = 'https://tritinia.com/tempmanga/beta/images/9.jpg';