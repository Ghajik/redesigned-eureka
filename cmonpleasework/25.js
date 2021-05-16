var image26 = document.getElementById("image26");
var image26ctx = image26.getContext("2d");
var image26img = new Image()
image26img.onload = function() {
  image26ctx.drawImage(image26img, 0, 6740, 720, 1098, 0, 0, 720, 1098);
};
image26img.src = 'https://tritinia.com/tempmanga/beta/images/3.jpg';