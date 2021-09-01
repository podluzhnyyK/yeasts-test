(function() {
    const burger = document.querySelector('.burger-menu');
    const header = document.querySelector('.header');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
        burger.classList.toggle('open');
    };
}());
