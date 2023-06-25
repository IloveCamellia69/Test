// Toggle burgur icon when clicked
const burgurIcon = document.querySelector(".burgur");
const nav = document.getElementById("nav");

burgurIcon.addEventListener("click", () => {
	burgurIcon.classList.toggle("active");
	if (nav.style.display === "grid") {
		nav.style.display = "none";
	} else {
		nav.style.display = "grid";
	}
});

const faqs = document.querySelectorAll(".faq-container li");
const downArrow = document.querySelectorAll("svg");

console.log(downArrow);

for (var i = 0; i < faqs.length; i++) {
	faqs[i].addEventListener("click", function () {
		this.querySelector("p").classList.toggle("hidden");
	});
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
