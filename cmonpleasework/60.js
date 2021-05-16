var image61 = document.getElementById("image61");
var image61ctx = image61.getContext("2d");
var image61img = new Image()
image61img.onload = function() {
  image61ctx.drawImage(image61img, 0, 0, 720, 1098, 0, 0, 720, 1098);
};
image61img.src = 'https://tritinia.com/tempmanga/beta/images/7.jpg';