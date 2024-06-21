const navBtn = document.querySelector(".nav-bar");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector("body");

let isNavOpen = false;

navBtn.addEventListener('click', () => {
    isNavOpen = (isNavOpen === true)? false: true; // changes isNavOpen to its opposite value
    
    if (isNavOpen) {
        mobileNav.style.display = 'block';
        body.style.overflowY = 'hidden'
    } else if (!isNavOpen) {
        mobileNav.style.display = 'none';
        body.style.overflowY = 'auto'
    }
});