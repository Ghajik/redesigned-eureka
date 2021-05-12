var image18 = document.getElementById("image18");
var image18ctx = image18.getContext("2d");
var image18img = new Image()
image18img.onload = function() {
  image18ctx.drawImage(image18img, 0, 9486, 720, 1098, 0, 0, 720, 1098);
};
image18img.src = 'https://tritinia.com/tempmanga/beta/images/2.jpg';