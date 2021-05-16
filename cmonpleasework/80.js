var image81 = document.getElementById("image81");
var image81ctx = image81.getContext("2d");
var image81img = new Image()
image81img.onload = function() {
  image81ctx.drawImage(image81img, 0, 0, 720, 1098, 0, 0, 720, 1098);
};
image81img.src = 'https://tritinia.com/tempmanga/beta/images/9.jpg';