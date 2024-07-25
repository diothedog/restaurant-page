import home from "./home.js";
import menu from "./menu.js";
import order from "./order.js";

home();

const content = document.querySelector("#content");

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };

    home();
});

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };

    menu();
});

const orderBtn = document.querySelector("#order");
orderBtn.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };

    order();
});