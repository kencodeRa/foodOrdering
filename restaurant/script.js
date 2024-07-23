// Menu toggle and navbar activation
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('#navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Remove active classes on scroll
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Search toggle
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-for').classList.toggle('active');
}
document.querySelector('#closed').onclick = () => {
    document.querySelector('#search-for').classList.remove('active');
}

// Swiper configuration
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,  // Correct property name is loop, not Loop
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,  // Correct property name is loop, not Loop
    breakpoints: {  // Correct property name is breakpoints, not brekpoints
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Loader fade-out
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 2000);
}

window.onload = fadeOut;
