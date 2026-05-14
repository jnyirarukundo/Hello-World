const toggleBtn = document.getElementById('toggle-btn');

// Listen for a click on the button, then toggle the dark-mode class on the body
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});