let hamburIcon = document.getElementById('hamburIcon');
let asideMenu = document.getElementById("asideMenu");
let menuClicked = false;

hamburIcon.addEventListener("click", () => {
    menuClicked = !menuClicked;

    if (!menuClicked) {
        asideMenu.style.display = "none";
    } else {
        asideMenu.style.display = "flex";
    }
})