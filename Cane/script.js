// 1. Target Element Selection
const yearSpan = document.getElementById('year');
const themeBtn = document.getElementById('theme-btn');
const contactBtn = document.getElementById('contact-btn');

// 2. Dynamic Year Injection
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// 3. Dark Mode Toggle
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

// 4. Contact Button Alert Message (matches image prompt message)
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    alert('Thank you for visiting! Reach out to me via vcane@uic.edu.ph');
  });
}