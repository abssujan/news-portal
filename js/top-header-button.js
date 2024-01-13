const buttons = document.querySelectorAll('.top-header-button');

let activeButton = null;

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove the class from the currently active button
    if (activeButton) {
      activeButton.classList.remove('hover:text-indigo-600', 'hover:border-b-2', 'hover:border-indigo-600', 'active-button');
    }

    // Add the class to the clicked button
    button.classList.add('hover:text-indigo-600', 'hover:border-b-2', 'hover:border-indigo-600', 'active-button');

    // Set the clicked button as the currently active button
    activeButton = button;

    // Your click event logic here
    console.log('Button clicked!');
  });
});
