
document.addEventListener("DOMContentLoaded", function () {

    // BOUTON ME SALUER
    const saluerButton = document.getElementById("saluer");

    if (saluerButton) {
        saluerButton.addEventListener("click", function () {
            alert("Bienvenue sur mon portfolio ! Je suis Aboubacar Camara.");
        });
    }

    // BOUTON MODE SOMBRE
    const darkMode = document.getElementById("darkMode");

    if (darkMode) {

        // Restaurer le thème enregistré
        if (localStorage.getItem("portfolio-theme") === "dark") {
            document.body.classList.add("mode-sombre");
            darkMode.textContent = "☀️ Mode clair";
        }

        darkMode.addEventListener("click", function () {

            document.body.classList.toggle("mode-sombre");

            const sombre = document.body.classList.contains("mode-sombre");

            darkMode.textContent = sombre
                ? "☀️ Mode clair"
                : "🌙 Mode sombre";

            localStorage.setItem(
                "portfolio-theme",
                sombre ? "dark" : "light"
            );

        });
    }

});
