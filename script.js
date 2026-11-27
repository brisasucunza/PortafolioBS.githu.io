const menuToggle = document.getElementById("menu-toggle");
const enlaces = document.querySelectorAll(".navbar a");

enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menuToggle.checked = false;
    });
});
