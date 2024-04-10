function spinBottle() {
  var bottle = document.getElementById('bottle');
  bottle.style.transition = 'none'; // Disable transition during reset
  bottle.style.transform = 'none'; // Reset transform to default
  void bottle.offsetWidth; // Trigger reflow to apply reset immediately
  bottle.style.transition = ''; // Re-enable transition

  var rotation = Math.floor(Math.random() * 360) + 360 * 5; // Generate a random rotation angle, plus multiple full rotations
  bottle.style.transform = 'rotate(' + rotation + 'deg)';
}
/*MENUU  */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});
