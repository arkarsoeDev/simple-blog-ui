let dropdown = document.querySelector(".c-dropdown__btn");

let test = document.querySelector("body");
let dropdown__menu = document.querySelector(".c-dropdown__menu");
test.addEventListener("click", function () {
    if (
        event.target === dropdown
            ? false
            : event.target.parentNode === dropdown
            ? false
            : true
    ) {
        if (dropdown__menu.classList.contains("show")) {
            dropdown__menu.classList.remove("show");
        }
    }
});
dropdown.addEventListener("click", function () {
    document.querySelector(".c-dropdown__menu").classList.toggle("show");
});
