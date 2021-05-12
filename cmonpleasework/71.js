var image72 = document.getElementById("image72");
var image72ctx = image72.getContext("2d");
var image72img = new Image()
image72img.onload = function() {
  image72ctx.drawImage(image72img, 0, 1298, 720, 1098, 0, 0, 720, 1098);
};
image72img.src = 'https://tritinia.com/tempmanga/beta/images/8.jpg';