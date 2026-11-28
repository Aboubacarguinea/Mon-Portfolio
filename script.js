
document.addEventListener("DOMContentLoaded", function () {

    // BOUTON ME SALUER
    const saluerButton = document.getElementById("saluer");

    if (saluerButton) {
        saluerButton.addEventListener("click", function () {
            alert("Bienvenue sur mon portfolio ! Je suis Aboubacar Camara.");
        });
    }

    // MODE SOMBRE
    const darkMode = document.getElementById("darkMode");

    if (darkMode) {

        // Récupérer le thème enregistré
        const themeEnregistre = localStorage.getItem("portfolio-theme");

        if (themeEnregistre === "dark") {
            document.body.classList.add("mode-sombre");
            darkMode.textContent = "☀️ Mode clair";
        } else {
            document.body.classList.remove("mode-sombre");
            darkMode.textContent = "🌙 Mode sombre";
        }

        // Changer le thème au clic
        darkMode.addEventListener("click", function () {

            document.body.classList.toggle("mode-sombre");

            const sombre = document.body.classList.contains("mode-sombre");

            if (sombre) {
                darkMode.textContent = "☀️ Mode clair";
                localStorage.setItem("portfolio-theme", "dark");
            } else {
                darkMode.textContent = "🌙 Mode sombre";
                localStorage.setItem("portfolio-theme", "light");
            }

        });
    }

});
