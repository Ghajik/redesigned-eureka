var image93 = document.getElementById("image93");
var image93ctx = image93.getContext("2d");
var image93img = new Image()
image93img.onload = function() {
  image93ctx.drawImage(image93img, 0, 2796, 720, 1098, 0, 0, 720, 1098);
};
image93img.src = 'https://tritinia.com/tempmanga/beta/images/10.jpg';