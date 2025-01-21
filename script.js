document.addEventListener("DOMContentLoaded", () => {
  const text = "Hello!! This is   SAI CHARAN TEJA VADDAGONI ";
  const typingElement = document.getElementById("typing");
  let index = 0;

  function typeText() {
    if (index < text.length) {
      typingElement.style.width = "fit-content"; // Expand as characters are typed
      typingElement.textContent += text[index];
      index++;
      setTimeout(typeText, 100); // Adjust typing speed here (100ms per character)
    } else {
      typingElement.style.borderRight = "none"; // Remove cursor after typing

      // Delay before restarting the typing effect
      setTimeout(() => {
        typingElement.textContent = ''; // Clear the text
        index = 0; // Reset the index
        typingElement.style.borderRight = '2px solid #61dafb'; // Add cursor back
        typeText(); // Start typing again
      }, 4000); // Wait 1 second before restarting
    }
  }

  typeText(); // Start the typing animation
});