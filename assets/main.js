const open_window = document.getElementById("open-window");
const modal_container = document.getElementById("window_container");
const close_window = document.getElementById("close-window");

open_window.addEventListener('click', () => {
    modal_container.classList.add('show');
})

close_window.addEventListener('click', () => {
    modal_container.classList.remove('show');
})

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle Nav.
        nav.classList.toggle('nav-active');

        //Animate Links.
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = "navLinkFade 0.5s ease forwards ${index / 7 + 1}s" // will start at 1s instead of 0s.
                console.log(index / 7 + 1);
            }
        })

        //Burger Animation...
        burger.classList.toggle('rotateBurger');
    });
}

const mainApp = () => {
    navSlide();
}

mainApp();