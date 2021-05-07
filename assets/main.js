const open_window = document.getElementById("open-window");
const modal_container = document.getElementById("window_container");
const close_window = document.getElementById("close-window");

open_window.addEventListener('click', () => {
    modal_container.classList.add('show');
})

close_window.addEventListener('click', () => {
    modal_container.classList.remove('show');
})
