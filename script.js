// Select the theme toggler element
const themeToggler = document.querySelector('.theme-toggler');

// Add event listener to the theme toggler
themeToggler.addEventListener('click', function() {
  // Select the calculator container element
  const calculatorContainer = document.querySelector('.calculator-light');

  // Toggle the dark class on the calculator container
  calculatorContainer.classList.toggle('calculator-dark');
});
