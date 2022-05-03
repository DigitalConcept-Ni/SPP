//Funcion del menu

var scrollAnterior = 0;

window.addEventListener("scroll", function(e) {

    var scroll = window.pageYOffset;

    if (scroll != 0) {
        document.querySelector('#menu').classList.add('blanco');


    } else {
        document.querySelector('#menu').classList.remove('blanco');

    }

    if (scrollAnterior > scroll) {
        document.querySelector('#menu').classList.remove('oculto');

    } else {
        document.querySelector('#menu').classList.add('oculto');
        // document.querySelector('.content__responsive').classList.remove('active');
    }

    scrollAnterior = scroll;

})