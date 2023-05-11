const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

function toggleDarkMode() {
    var logoImage = document.getElementById("logo");
    var estaOscuro = true
    if (estaOscuro) {
        logoImage.src = "./asset/logoB.png";
        body.classList.toggle('dark-mode');
        body.classList.remove('fondo');
    }
    if (!estaOscuro) {
        logoImage.src = "./asset/logoN.png";
        body.classList.remove('dark-mode');
        body.classList.toggle('fondo');
    }
}

darkModeButton.addEventListener('click', toggleDarkMode);