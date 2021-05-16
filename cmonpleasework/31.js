var image32 = document.getElementById("image32");
var image32ctx = image32.getContext("2d");
var image32img = new Image()
image32img.onload = function() {
  image32ctx.drawImage(image32img, 0, 1298, 720, 1098, 0, 0, 720, 1098);
};
image32img.src = 'https://tritinia.com/tempmanga/beta/images/4.jpg';