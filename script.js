// Function to spin the bottle and show other buttons
function spinBottle() {
  // Hide the SPIN button
  var spinButton = document.querySelector('.shadow__btn');
  spinButton.style.display = 'none';

  // Show the button group
  var buttonGroup = document.getElementById('buttonGroup');
  buttonGroup.style.display = 'flex';

  // Rotate the bottle
  var bottle = document.getElementById('bottle');
  bottle.style.transition = 'none'; // Disable transition during reset
  bottle.style.transform = 'none'; // Reset transform to default
  void bottle.offsetWidth; // Trigger reflow to apply reset immediately
  bottle.style.transition = ''; // Re-enable transition

  var rotation = Math.floor(Math.random() * 360) + 360 * 5; // Generate a random rotation angle, plus multiple full rotations
  bottle.style.transform = 'rotate(' + rotation + 'deg)';
}

// Function to reset the bottle and show the SPIN button
// Function to reset the bottle and refresh the page
function resetBottle() {
  // Refresh the page
  location.reload();
}

  // Hide the button group
  var buttonGroup = document.getElementById('buttonGroup');
  buttonGroup.style.display = 'none'; 

  // Reset the bottle rotation
  var bottle = document.getElementById('bottle');
  bottle.style.transition = 'none'; // Disable transition during reset
  bottle.style.transform = 'none'; // Reset transform to default
  void bottle.offsetWidth; // Trigger reflow to apply reset immediately
  bottle.style.transition = ''; // Re-enable transition
S

// Function to show the Truth button
function showTruth() {
  var truthButton = document.getElementById('truthButton');
  truthButton.style.display = 'block';
}

// Function to show the Dare button
function showDare() {
  var dareButton = document.getElementById('dareButton');
  dareButton.style.display = 'block';
}

//MENU Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});
