// MENU LATERAL
function openMenu(){
    document.querySelector('aside.menu-lateral').classList.add('menu-lateral--open');
    document.body.style.overflow = "hidden";
    document.body.querySelector('nav.header__navbar--mobile').style.display = "none";
    document.body.querySelector('div.header__content').style.display = "none";
    document.body.querySelector('div#overlay').classList.add('background-black');
}

function closeMenu(){
    document.querySelector('aside.menu-lateral').classList.remove('menu-lateral--open');
    document.body.style.overflow = "auto";
    document.body.querySelector('nav.header__navbar--mobile').style.display = "flex";
    document.body.querySelector('div.header__content').style.display = "flex";
    document.querySelector('div#overlay').classList.remove('background-black');
    document.querySelector('ul.navbar__third-list').classList.remove('third-list--open');
    document.querySelector('ul.navbar__second-list').classList.remove('second-list--open');
    document.querySelector('ul.navbar__first-list').classList.remove('first-list--open');
    document.querySelector('span.menu-lateral__arrow-3').classList.remove('rotate');
    document.querySelector('span.menu-lateral__arrow-2').classList.remove('rotate');
    document.querySelector('span.menu-lateral__arrow-1').classList.remove('rotate');
}

// LISTAS MOBILES
function openThirdList(){
    document.querySelector('ul.navbar__third-list').classList.toggle('third-list--open');
    document.querySelector('span.menu-lateral__arrow-3').classList.toggle('rotate');

    document.querySelector('ul.navbar__first-list').classList.remove('first-list--open');
    document.querySelector('span.menu-lateral__arrow-1').classList.remove('rotate');

    document.querySelector('ul.navbar__second-list').classList.remove('second-list--open');
    document.querySelector('span.menu-lateral__arrow-2').classList.remove('rotate');
}

function openSecondList(){
    document.querySelector('ul.navbar__second-list').classList.toggle('second-list--open');
    document.querySelector('span.menu-lateral__arrow-2').classList.toggle('rotate');

    document.querySelector('ul.navbar__first-list').classList.remove('first-list--open');
    document.querySelector('span.menu-lateral__arrow-1').classList.remove('rotate');

    document.querySelector('ul.navbar__third-list').classList.remove('third-list--open');
    document.querySelector('span.menu-lateral__arrow-3').classList.remove('rotate');
}

function openFirstList(){
    document.querySelector('ul.navbar__first-list').classList.toggle('first-list--open');
    document.querySelector('span.menu-lateral__arrow-1').classList.toggle('rotate');

    document.querySelector('ul.navbar__second-list').classList.remove('second-list--open');
    document.querySelector('span.menu-lateral__arrow-2').classList.remove('rotate');

    document.querySelector('ul.navbar__third-list').classList.remove('third-list--open');
    document.querySelector('span.menu-lateral__arrow-3').classList.remove('rotate');
}

// LISTAS DESKTOP
function openThirdListDesktop(){
    document.querySelector('ul.navbar__third-list--desktop').classList.toggle('third-list-desktop-open');
    document.querySelector('span.navbar-desktop__arrow-3').classList.toggle('rotate');

    document.querySelector('ul.navbar__first-list--desktop').classList.remove('first-list-desktop-open');
    document.querySelector('span.navbar-desktop__arrow-1').classList.remove('rotate');

    document.querySelector('ul.navbar__second-list--desktop').classList.remove('second-list-desktop-open');
    document.querySelector('span.navbar-desktop__arrow-2').classList.remove('rotate');
}

function openSecondListDesktop(){
    document.querySelector('ul.navbar__second-list--desktop').classList.toggle('second-list-desktop-open');
    document.querySelector('span.navbar-desktop__arrow-2').classList.toggle('rotate');

    document.querySelector('ul.navbar__first-list--desktop').classList.remove('first-list-desktop-open');
    document.querySelector('span.navbar-desktop__arrow-1').classList.remove('rotate');

    document.querySelector('ul.navbar__third-list--desktop').classList.remove('third-list-desktop-open');
    document.querySelector('span.navbar-desktop__arrow-3').classList.remove('rotate');
}

function openFirstListDesktop(){
    document.querySelector('ul.navbar__first-list--desktop').classList.toggle('first-list-desktop-open');
    document.querySelector('span.navbar-desktop__arrow-1').classList.toggle('rotate');
    
    document.querySelector('ul.navbar__second-list--desktop').classList.remove('second-list-desktop-open');
    document.querySelector('span.navbar-desktop__arrow-2').classList.remove('rotate');

    document.querySelector('ul.navbar__third-list--desktop').classList.remove('third-list-desktop-open');
    document.querySelector('span.navbar-desktop__arrow-3').classList.remove('rotate');
}
