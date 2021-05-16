var image60 = document.getElementById("image60");
var image60ctx = image60.getContext("2d");
var image60img = new Image()
image60img.onload = function() {
  image60ctx.drawImage(image60img, 0, 11497, 720, 1098, 0, 0, 720, 1098);
};
image60img.src = 'https://tritinia.com/tempmanga/beta/images/6.jpg';