/* Function to dynamically create and append thumbnail images */
function loopingImg() {
    for (let i = 1; i < 6; i++) { // Loop from 1 to 5 to generate 5 images
      let newImage = document.createElement('img'); // Create a new <img> element
      let image = 'images/pic' + i + '.jpg'; // Generate the image source path dynamically
      newImage.setAttribute('src', image); // Set the 'src' attribute to the generated image path
      document.querySelector('.thumb-bar').appendChild(newImage); // Append the new image to the thumb-bar container
    }
  }
  
  /* Function to set up click event listeners on thumbnail images */
  function clickImg() {
    // Define what happens when a thumbnail is clicked
    const SetImgSrc = function () {
      let attribute = this.getAttribute('src'); // Get the 'src' of the clicked image
      let displayedImage = document.querySelector('.displayed-img'); // Select the main image element
      displayedImage.setAttribute('src', attribute); // Update the main image's 'src' to match the clicked thumbnail
    };
  
    // Select only the images inside the thumb-bar to avoid affecting the main image
    let elements = document.querySelectorAll('.thumb-bar img');
    elements.forEach(function (element) {
      element.addEventListener('click', SetImgSrc); // Add a click event to each thumbnail
    });
  }
  
  /* Function to toggle darken/lighten overlay on the main image */
  function darkenImg() {
    let buttonNode = document.querySelector('.dark'); // Select the dark/light toggle button
    let overlay = document.querySelector('.overlay'); // Select the overlay element that darkens the image
  
    // Add a click event listener to the button
    buttonNode.addEventListener('click', () => {
      // Check if the current class is 'dark'
      if (buttonNode.getAttribute('class') === 'dark') {
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'; // Apply dark overlay
        buttonNode.setAttribute('class', 'light'); // Change button class to 'light'
        buttonNode.textContent = 'Lighten'; // Update button text
      } else {
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'; // Remove overlay (lighten)
        buttonNode.setAttribute('class', 'dark'); // Change button class back to 'dark'
        buttonNode.textContent = 'Darken'; // Update button text
      }
    });
  }
  
  /* Initialize all functionality after the window has fully loaded */
  window.addEventListener('load', () => {
    loopingImg();  // Create and display thumbnail images
    clickImg();    // Set up click handlers for thumbnails
    darkenImg();   // Wire up the darken/lighten toggle functionality
  });
  