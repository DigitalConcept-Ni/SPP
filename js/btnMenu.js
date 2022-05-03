// Function for the icon button

let menu = document.querySelector('.content-items'); // select the buttons on the menu panel
let links = document.querySelectorAll('a[class="navbar-link"]'); // Select all links from the panel menu


const btnIcon = () => {
    let btn = document.querySelector('.btn-icon');

    btn.addEventListener('click', function () {
        menu.classList.toggle('visible');
    })
}

const btnIconX = () => {
    let btn = document.querySelector('.btn-icon-x');

    btn.addEventListener('click', function () {
        menu.classList.toggle('visible');
    })
}


links.forEach(function (e) {
    e.addEventListener('click', function () {
        menu.classList.toggle('visible');
    })
})

btnIcon();
btnIconX();