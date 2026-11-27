// MODE SOMBRE

    const darkMode = document.getElementById("darkMode");

    if (darkMode) {

        // Restaurer le thème choisi
        const theme = localStorage.getItem("portfolio-theme");

        if (theme === "dark") {
            document.body.classList.add("mode-sombre");
            darkMode.textContent = "☀️ Mode clair";
        }

        darkMode.addEventListener("click", function () {

            document.body.classList.toggle("mode-sombre");

            const isDark = document.body.classList.contains("mode-sombre");

            darkMode.textContent = isDark
                ? "☀️ Mode clair"
                : "🌙 Mode sombre";

            localStorage.setItem(
                "portfolio-theme",
                isDark ? "dark" : "light"
            );

        });
    }

});



