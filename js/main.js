//Funcion del menu

var scrollAnterior = 0;

window.addEventListener("scroll", function (e) {

    var scroll = window.pageYOffset;

    if (scroll != 0) {
        document.querySelector('#menu').classList.add('blanco');
        document.querySelector('.title-call').classList.add('black');


    } else {
        document.querySelector('#menu').classList.remove('blanco');
        document.querySelector('.title-call').classList.remove('black');
    }

    if (scrollAnterior > scroll) {
        document.querySelector('#menu').classList.remove('oculto');

    } else {
        document.querySelector('#menu').classList.add('oculto');
        // document.querySelector('.content__responsive').classList.remove('active');
    }

    scrollAnterior = scroll;

})


// function for the contact


const contact = () => {
    let form = document.getElementById('contact-banner');
    form.classList.remove('oculto');
    form.classList.add('visible');
}

const btnXContact = () => {
    let x = document.getElementById('contact-banner');
    x.classList.remove('visible');
    x.classList.add('oculto');
}