const button = document.getElementById('animateBtn');
const box = document.getElementById('box');

// Load animation preference
window.onload = () => {
  const saved = localStorage.getItem('animate');
  if (saved === 'true') {
    box.classList.add('animated-box');
  }
};

button.addEventListener('click', () => {
  box.classList.toggle('animated-box');

  // Save preference to localStorage
  const isAnimated = box.classList.contains('animated-box');
  localStorage.setItem('animate', isAnimated);
});
