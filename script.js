// Array of truth questions
var truthQuestions = [
  "Have you ever cheated in a game?",
  "What is your biggest fear?",
  "Have you ever lied to get out of trouble?",
  "What is something you've done that you're ashamed of?",
  "Have you ever snooped through someone else's phone?",
  "What is your most embarrassing habit?",
  "Have you ever pretended to like someone to spare their feelings?",
  "What is the weirdest dream you've ever had?",
  "Have you ever blamed something on someone else that you actually did?",
  "What is your most irrational fear?"
];

// Array of dare tasks
var dareQuestions = [
  "Eat a spoonful of mustard.",
  "Sing the chorus of your favorite song.",
  "Text a friend and tell them you can't be friends anymore.",
  "Go outside and yell 'Happy New Year!' as loud as you can.",
  "Let someone give you a makeover.",
  "Do 20 pushups.",
  "Speak in an accent for the next 10 minutes.",
  "Dance like a chicken for one minute.",
  "Call a random number and sing 'Happy Birthday' to whoever answers.",
  "Eat a raw onion slice."
];

// Function to spin the bottle and show the popup
function spinBottle() {
  // Hide the SPIN button
  var spinButton = document.getElementById('spinButton');
  spinButton.style.display = 'none';

  var bottle = document.getElementById('bottle');
  bottle.style.transition = 'none'; // Disable transition during reset
  bottle.style.transform = 'none'; // Reset transform to default
  void bottle.offsetWidth; // Trigger reflow to apply reset immediately
  bottle.style.transition = ''; // Re-enable transition

  var rotation = Math.floor(Math.random() * 360) + 360 * 5; // Generate a random rotation angle, plus multiple full rotations
  bottle.style.transform = 'rotate(' + rotation + 'deg)';

  // After rotation completes, show the popup
  setTimeout(showPopup, 3000); // Adjust 3000 milliseconds (3 seconds) as per your transition time
}

// Function to show the spin popup
function showPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

// Function to close the spin popup and reset the bottle rotation
function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
  var spinButton = document.getElementById('spinButton');
  spinButton.style.display = 'block'; // Show the spin button again

  // Reset the bottle rotation
  var bottle = document.getElementById('bottle');
  bottle.style.transition = 'none'; // Disable transition during reset
  bottle.style.transform = 'none'; // Reset transform to default
  void bottle.offsetWidth; // Trigger reflow to apply reset immediately
  bottle.style.transition = ''; // Re-enable transition
}

// Function to show the truth popup
// Function to show the truth popup and populate it with questions
function showTruthPopup() {
  closePopup();
  var truthPopup = document.getElementById('truthPopup');
  truthPopup.style.display = 'block';
  var truthList = truthPopup.querySelector('ul');
  truthList.innerHTML = ''; // Clear any existing questions
  truthQuestions.forEach(question => {
    var listItem = document.createElement('li');
    listItem.textContent = question;
    truthList.appendChild(listItem);
  });
}
// Function to close the truth popup
function closeTruthPopup() {
  var truthPopup = document.getElementById('truthPopup');
  truthPopup.style.display = 'none';
}

// Function to show the dare popup and populate it with tasks
function showDarePopup() {
  closePopup();
  var darePopup = document.getElementById('darePopup');
  darePopup.style.display = 'block';
  var dareList = darePopup.querySelector('ul');
  dareList.innerHTML = ''; // Clear any existing tasks
  dareQuestions.forEach(task => {
    var listItem = document.createElement('li');
    listItem.textContent = task;
    dareList.appendChild(listItem);
  });
}

// Function to close the dare popup
function closeDarePopup() {
  var darePopup = document.getElementById('darePopup');
  darePopup.style.display = 'none';
}
