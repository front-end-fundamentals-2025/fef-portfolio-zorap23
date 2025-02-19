// Get the button and body elements
const toggleButton = document.getElementById("toggle-mode");
const body = document.body;

// Check if dark mode is enabled in localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
} else {
  body.classList.add("light-mode");
}

// Add event listener to the button
toggleButton.addEventListener("click", () => {
  console.log("Button clicked!"); // Debugging line
  // Toggle between dark and light mode
  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("dark-mode", "enabled"); // Save preference
  } else {
    body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("dark-mode", "disabled"); // Save preference
  }
});
