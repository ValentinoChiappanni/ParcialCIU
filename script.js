const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;
var estaOscuro = true
function toggleDarkMode() {
    var logoImage = document.getElementById("logo");
    if (estaOscuro) {
        console.log('Negro')
        logoImage.src = "./asset/logoB.png";
        body.classList.toggle('dark-mode');
        body.classList.remove('fondo');
        estaOscuro = !estaOscuro
    } else {
        console.log('Blanco')
        logoImage.src = "./asset/logoN.png";
        body.classList.remove('dark-mode');
        body.classList.toggle('fondo');
        estaOscuro = !estaOscuro
    }
}

darkModeButton.addEventListener('click', toggleDarkMode);