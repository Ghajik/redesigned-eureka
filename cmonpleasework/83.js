var image84 = document.getElementById("image84");
var image84ctx = image84.getContext("2d");
var image84img = new Image()
image84img.onload = function() {
  image84ctx.drawImage(image84img, 0, 3754, 720, 1098, 0, 0, 720, 1098);
};
image84img.src = 'https://tritinia.com/tempmanga/beta/images/9.jpg';