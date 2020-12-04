// HAMBURGER BUTTON
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener("click", ()=> {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
   
}
navSlide();

//LIGHT DARK MODE
if (localStorage.getItem('theme')=='dark')
    setDarkMode(true)
    
function setDarkMode(isDark){
    if(isDark) {
        document.body.setAttribute('id', 'darkmode')
        localStorage.setItem('theme', 'dark')
    } else {
        document.body.setAttribute('id', '')
        localStorage.setItem('theme')
    }
}

//ANIMATION OVERLAY
let btn = document.getElementById('cta-btn');
let overlay = document.getElementById('overlay');

btn.addEventListener('click', () =>{
    overlay.style.display = 'grid';
    overlay.classList.add('animate-overlay');
})

