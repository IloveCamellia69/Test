const navBurger = document.querySelector('.nav-burger');
const navPanel = document.querySelector('.nav-panel');

navBurger.addEventListener('click', function() {
  navBurger.classList.toggle('active');
  navPanel.classList.toggle('active');
});