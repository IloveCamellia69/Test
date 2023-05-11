const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");
const nav = document.getElementById("nav");

// Set initial position of nav
const x = 0;
const y = 100;

// opens nav
navOpen.addEventListener("click", () => {
	nav.animate({ left: [`${x}%`] }, { duration: 200, fill: "forwards" });
	nav.style.display = "flex";
});

// closes nav
navClose.addEventListener("click", () => {
	nav.animate({ left: [`${y}%`] }, { duration: 200, fill: "forwards" });
	nav.style.display = "none";
});

// Check screen size and remove inline style if necessary
function removeInlineStyle() {
	if (window.innerWidth > 600) {
		nav.animate({ left: [`${y}%`] }, { duration: 200, fill: "forwards" });
		nav.style.display = "none";
	}
}

// Call the function on page load and whenever the window is resized
window.addEventListener("load", removeInlineStyle);
window.addEventListener("resize", removeInlineStyle);
