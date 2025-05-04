// Event Handling for Button Click to Change Text and Color
const changeTextColorBtn = document.getElementById('changeTextColorBtn');
changeTextColorBtn.addEventListener('click', function() {
  document.body.style.backgroundColor = 'lightblue';
  changeTextColorBtn.textContent = "You clicked me!";
  changeTextColorBtn.style.color = 'red';
});

// Event Handling for Hover Effects (Image Gallery)
const images = document.querySelectorAll('.gallery img');
images.forEach(img => {
  img.addEventListener('mouseenter', function() {
    img.style.transform = 'scale(1.1)';
  });
  img.addEventListener('mouseleave', function() {
    img.style.transform = 'scale(1)';
  });
});

// Event Handling for Accordion
const accordionButtons = document.querySelectorAll('.accordion-btn');
accordionButtons.forEach(button => {
  button.addEventListener('click', function() {
    const panel = button.nextElementSibling;
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
    button.classList.toggle('active');
  });
});

// Form Validation
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Simple email and password validation
  if (!email || !password || password.length < 8) {
    alert("Please provide valid email and password (min 8 characters).");
    event.preventDefault(); // Prevent form submission
  }
});

// Bonus: Double-click or long press secret action
document.body.addEventListener('dblclick', function() {
  alert('You double-clicked the body! 🎉');
});
