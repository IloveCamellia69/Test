var virtical = document.getElementById("virtical");
var horizontal = document.getElementById("horizontal");

document.addEventListener("mousemove", function(event) {
  var x = event.clientX;
  var y = event.clientY
  virtical.style.left = x + "px";
  horizontal.style.top = y + "px";
});