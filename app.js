const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const navSlide = ()=>{
    
    
    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');

        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                    link.style.animation = ''
            } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
            return;
        });
        //burger animation
        burger.classList.toggle('toggle');
        
    });
    
}

// Hide nav on link click
const navHide = ()=>{
    nav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        });    
}

navSlide();
navHide();