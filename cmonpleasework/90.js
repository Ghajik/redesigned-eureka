var image91 = document.getElementById("image91");
var image91ctx = image91.getContext("2d");
var image91img = new Image()
image91img.onload = function() {
  image91ctx.drawImage(image91img, 0, 0, 720, 1098, 0, 0, 720, 1098);
};
image91img.src = 'https://tritinia.com/tempmanga/beta/images/10.jpg';