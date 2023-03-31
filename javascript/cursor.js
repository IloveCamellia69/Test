const virtical = document.getElementById("virtical");
const horizontal = document.getElementById("horizontal");
const info = document.getElementById("info")

//Track cursor then more elements to cursor with a deplay
document.addEventListener("mousemove", function(event) {
  let x = event.clientX
      y = event.clientY
  
  virtical.animate({ left: x + "px" }, { duration: 700, fill: "forwards" });
  horizontal.animate({ top: y + "px" }, { duration: 700, fill: "forwards" });
  info.style.transform = `translate(${x}px, ${y}px)`;
});


//Toggle large Crosshairs
document.addEventListener("keydown", function(event) {
  if (event.key === " " ) { // Toggle on space
    const crosshairs = document.getElementById("cursor");
    crosshairs.style.display = crosshairs.style.display === "none" ? "block" : "none";
  }
});