document.addEventListener("DOMContentLoaded", function () {

    // BOUTON ME SALUER
    const saluerButton = document.getElementById("saluer");

    saluerButton.addEventListener("click", function () {
        alert("Bienvenue sur mon portfolio ! Je suis Aboubacar Camara.");
    });

    // MODE SOMBRE
    const darkMode = document.getElementById("darkMode");

    darkMode.addEventListener("click", function () {
        document.body.classList.toggle("mode-sombre");

        const isDark = document.body.classList.contains("mode-sombre");

        darkMode.textContent = isDark
            ? "☀️ Mode clair"
            : "🌙 Mode sombre";

        localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    });

    // RESTAURER LE THEME
    if (localStorage.getItem("portfolio-theme") === "dark") {
        document.body.classList.add("mode-sombre");
        darkMode.textContent = "☀️ Mode clair";
    }

});
