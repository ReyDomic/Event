// Define your variables
var menu = document.querySelector('#menu-bars');
var navbar = document.querySelector('.navbar');
var isMenuOpen = false; // Track whether the menu is open or closed

// Toggle menu function
function toggleMenu() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    isMenuOpen = !isMenuOpen; // Toggle the menu state
}

// Menu click event handler
menu.addEventListener('click', function () {
    toggleMenu();
});

// Function to close the menu when scrolling
function closeMenuOnScroll() {
    if (isMenuOpen) {
        toggleMenu();
    }
}

// Scroll event listener
window.addEventListener('scroll', function () {
    closeMenuOnScroll();
});

// Initialize Swiper for home slider
var homeSlider = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});

// Initialize Swiper for review slider
var reviewSlider = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});
