const navBtn = document.querySelector(".nav-bar");
const mobileNav = document.querySelector(".mobile-nav");

let isNavOpen = false;

navBtn.addEventListener('click', () => {
    isNavOpen = (isNavOpen === true)? false: true; // changes isNavOpen to its opposite value
    
    if (isNavOpen) {
        mobileNav.style.display = 'block';
    } else if (!isNavOpen) {
        mobileNav.style.display = 'none';
    }
});