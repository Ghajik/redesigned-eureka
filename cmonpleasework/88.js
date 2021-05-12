var image89 = document.getElementById("image89");
var image89ctx = image89.getContext("2d");
var image89img = new Image()
image89img.onload = function() {
  image89ctx.drawImage(image89img, 0, 10349, 720, 1098, 0, 0, 720, 1098);
};
image89img.src = 'https://tritinia.com/tempmanga/beta/images/9.jpg';