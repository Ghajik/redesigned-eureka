var image12 = document.getElementById("image12");
var image12ctx = image12.getContext("2d");
var image12img = new Image()
image12img.onload = function() {
  image12ctx.drawImage(image12img, 0, 1398, 720, 1098, 0, 0, 720, 1098);
};
image12img.src = 'https://tritinia.com/tempmanga/beta/images/2.jpg';