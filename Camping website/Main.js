// SHOW MENU 
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// Menu Show 

// validate if constants exist

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
// VALIDATE IF CONSTANT EXIST

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on the each nav linkAction, we remove the show menu class 
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// CHANGE BACKGROUND HEADER 

const bgHeader = () =>{
    const header =document.getElementById('header')
    // when the scroll is grearter than 50vh, add the scroll header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header');
}
window.addEventListener('scroll', bgHeader);

/* GSAP ANIMATION */
gsap.from('.home__img-2', { opacity: 0, y: 200, duration: 1.2, delay: 0.1 });
gsap.from('.home__img-3', { opacity: 0, y: 200, duration: 1.2, delay: 0.1 });
gsap.from('.home__data', { opacity: 0, y: -60, duration: 1.2, delay: 1 });
gsap.from('.home_bird-1', { opacity: 0, x: -80, duration: 1.2, delay: 1.1 });
gsap.from('.home_bird-2', { opacity: 0, x: 80, duration: 1.2, delay: 1.2 });
gsap.from('.home__img-1', { opacity: 0, y: 200, duration: 1.2, delay: 1.2 });
gsap.from('.home__img-4', { opacity: 0, x: 200, duration: 1.2, delay: 1.3 });