const navBtn = document.querySelector(".nav-bar");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector("body");
const navBar = document.querySelector(".nav-bar");
const xMark = document.querySelector(".x-mark");
const mobileMenu = document.querySelectorAll(".m-menu");

let isNavOpen = false;

navBtn.addEventListener('click', () => {
    isNavOpen = (isNavOpen === true)? false: true; // changes isNavOpen to its opposite value
    if (isNavOpen) {
        mobileNav.style.display = 'block';
        body.style.overflowY = 'hidden'
        showCross();
    } else if (!isNavOpen) {
        mobileNav.style.display = 'none';
        body.style.overflowY = 'auto'
    }
});

mobileMenu.forEach((item) => {
    item.addEventListener('click', () => {
        mobileNav.style.display = 'none';
        body.style.overflowY = 'auto';
        hideCross();
        isNavOpen = false;
    })
});

xMark.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    body.style.overflowY = 'auto'
    hideCross();
    isNavOpen = false;
});

function showCross() {
    navBar.style.display = 'none';
    xMark.style.display = 'block';
}

function hideCross() {
    navBar.style.display = 'block';
    xMark.style.display = 'none';
}