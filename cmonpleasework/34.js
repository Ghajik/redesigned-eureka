var image35 = document.getElementById("image35");
var image35ctx = image35.getContext("2d");
var image35img = new Image()
image35img.onload = function() {
  image35ctx.drawImage(image35img, 0, 5102, 720, 1098, 0, 0, 720, 1098);
};
image35img.src = 'https://tritinia.com/tempmanga/beta/images/4.jpg';