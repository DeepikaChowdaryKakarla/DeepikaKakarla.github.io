// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Skill bar animation
const progressBars = document.querySelectorAll(".progress");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight / 1.2;
  progressBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    if (barTop < triggerBottom) {
      bar.style.width = bar.dataset.progress + "%";
    }
  });
});
