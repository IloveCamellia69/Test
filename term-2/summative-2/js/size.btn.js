let activeButtonId = null;

function activateButton(buttonId) {
	if (activeButtonId !== null) {
		// Deactivate the currently active button
		const activeButton = document.getElementById(activeButtonId);
		activeButton.classList.remove("active");
	}

	// Activate the clicked button
	const clickedButton = document.getElementById(buttonId);
	clickedButton.classList.add("active");
	activeButtonId = buttonId;
}
