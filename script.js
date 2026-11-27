function saluer() {
    alert("Bienvenue sur mon portfolio ! Je suis Aboubacar Camara.");
}

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", function () {
    document.body.classList.toggle("mode-sombre");

    if (document.body.classList.contains("mode-sombre")) {
        darkMode.textContent = "☀️ Mode clair";
    } else {
        darkMode.textContent = "🌙 Mode sombre";
    }
});


