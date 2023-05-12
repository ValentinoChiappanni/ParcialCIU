const darkModeButton = document.getElementById('darkModeButton');
const img = document.getElementById('dark');
const body = document.body;
var estaOscuro = true
function toggleDarkMode() {
    var logoImage = document.getElementById("logo");
    if (estaOscuro) {
        logoImage.src = "./asset/logoB.png";
        body.classList.toggle('dark-mode');
        body.classList.remove('fondo');
        img.src = "./asset/sol.png";
        estaOscuro = !estaOscuro
    } else {
        logoImage.src = "./asset/logoN.png";
        body.classList.remove('dark-mode');
        body.classList.toggle('fondo');
        img.src = "./asset/luna.png";
        estaOscuro = !estaOscuro
    }
}

darkModeButton.addEventListener('click', toggleDarkMode);