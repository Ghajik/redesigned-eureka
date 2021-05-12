var image56 = document.getElementById("image56");
var image56ctx = image56.getContext("2d");
var image56img = new Image()
image56img.onload = function() {
  image56ctx.drawImage(image56img, 0, 6300, 720, 1098, 0, 0, 720, 1098);
};
image56img.src = 'https://tritinia.com/tempmanga/beta/images/6.jpg';