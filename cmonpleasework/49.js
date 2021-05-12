var image50 = document.getElementById("image50");
var image50ctx = image50.getContext("2d");
var image50img = new Image()
image50img.onload = function() {
  image50ctx.drawImage(image50img, 0, 12182, 720, 1098, 0, 0, 720, 1098);
};
image50img.src = 'https://tritinia.com/tempmanga/beta/images/5.jpg';