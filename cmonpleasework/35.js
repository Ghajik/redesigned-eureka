var image36 = document.getElementById("image36");
var image36ctx = image36.getContext("2d");
var image36img = new Image()
image36img.onload = function() {
  image36ctx.drawImage(image36img, 0, 6305, 720, 1098, 0, 0, 720, 1098);
};
image36img.src = 'https://tritinia.com/tempmanga/beta/images/4.jpg';