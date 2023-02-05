// MENU LATERAL
function openMenu(){
    document.querySelector('aside.menu-lateral').classList.add('menu-lateral--open');
    document.body.style.overflow = "hidden";
    document.body.querySelector('nav.header__navbar--mobile').style.display = "none";
    document.body.querySelector('div.header__content').style.display = "none";
}

function closeMenu(){
    document.querySelector('aside.menu-lateral').classList.remove('menu-lateral--open');
    document.body.style.overflow = "auto";
    document.body.querySelector('nav.header__navbar--mobile').style.display = "flex";
    document.body.querySelector('div.header__content').style.display = "flex";
    document.querySelector('ul.navbar__third-list').classList.remove('third-list--open');
}

// TERCEIRO ITEM DO MENU LATERAL
function openThirdList(){
    document.querySelector('ul.navbar__third-list').classList.toggle('third-list--open');
    document.querySelector('span.menu-lateral__arrow').classList.toggle('rotate');
}

