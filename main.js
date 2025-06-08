// Counter Button Functionality
let count = 0;
const counterBtn = document.getElementById("counter-btn");
counterBtn.addEventListener("click", () => {
  count++;
  counterBtn.textContent = `Click Count: ${count}`;
});

// Color Change Button
document.addEventListener("DOMContentLoaded", () => {
  const colorBtn = document.getElementById("color-btn");
  if (colorBtn) {
    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeead"];
    let colorIndex = 0;

    colorBtn.addEventListener("click", () => {
      colorBtn.style.backgroundColor = colors[colorIndex];
      colorBtn.style.transition = "background-color 0.3s ease";
      colorIndex = (colorIndex + 1) % colors.length;
    });
  }
});

// Mouse Position Tracking
const mousePosDisplay = document.getElementById("mouse-pos");
document.addEventListener("mousemove", (e) => {
  mousePosDisplay.textContent = `Mouse Position: X: ${e.clientX}, Y: ${e.clientY}`;
});

// Input Demo
const inputDemo = document.getElementById("input-demo");
const inputDisplay = document.getElementById("input-display");

inputDemo.addEventListener("input", (e) => {
  inputDisplay.textContent = `You typed: ${e.target.value}`;
});

// Form Submission
const demoForm = document.getElementById("demo-form");
demoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted!");
});

// Animation Demo Click
const animationDemo = document.querySelector(".animation-demo");
animationDemo.addEventListener("click", () => {
  animationDemo.style.animationPlayState =
    animationDemo.style.animationPlayState === "paused" ? "running" : "paused";
});
// Get the button element
const alertBtn = document.getElementById("alertBtn");

// Add click event listener to button
alertBtn.addEventListener("click", () => {
  alert("Hello! Thanks for clicking!");
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add image loading animation
const img = document.querySelector("img");
img.style.opacity = "0";
img.style.transition = "opacity 0.5s ease-in";

img.addEventListener("load", () => {
  img.style.opacity = "1";
});

// Add random color change to h1 on hover
const h1 = document.querySelector("h1");
h1.addEventListener("mouseover", () => {
  const colors = ["#2c3e50", "#e74c3c", "#3498db", "#2ecc71", "#f1c40f"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  h1.style.color = randomColor;
});

// Add console message
console.log("JavaScript loaded successfully! 🚀");
