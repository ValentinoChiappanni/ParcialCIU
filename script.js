const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}

darkModeButton.addEventListener('click', toggleDarkMode);