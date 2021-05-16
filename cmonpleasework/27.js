var image28 = document.getElementById("image28");
var image28ctx = image28.getContext("2d");
var image28img = new Image()
image28img.onload = function() {
  image28ctx.drawImage(image28img, 0, 9241, 720, 1098, 0, 0, 720, 1098);
};
image28img.src = 'https://tritinia.com/tempmanga/beta/images/3.jpg';