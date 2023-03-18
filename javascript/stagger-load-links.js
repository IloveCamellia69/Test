// select all the boxes
const boxes = document.querySelectorAll('div');

// loop through each box and add a delay before showing it
boxes.forEach((box, index) => {
  setTimeout(() => {
    box.classList.remove('hide');
  }, index * 50); // add a delay based on the box index
});