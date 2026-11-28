alert("JavaScript est chargé !");

document.addEventListener("DOMContentLoaded", function () {

    const darkMode = document.getElementById("darkMode");

    if (darkMode) {
        darkMode.addEventListener("click", function () {
            document.body.classList.toggle("mode-sombre");

            const sombre = document.body.classList.contains("mode-sombre");

            darkMode.textContent = sombre
                ? "☀️ Mode clair"
                : "🌙 Mode sombre";
        });
    }

});
