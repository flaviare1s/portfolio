const btnMobile = document.querySelector('#btn-menu')
const card = document.querySelector('.card')
const menu = document.querySelector('#menu')
const nav = document.querySelector('#nav')

function toggleMenu() {
    nav.classList.toggle('active')
    
    if (nav.classList.contains('active')) {
        menu.style.height = (card.offsetHeight - 71) + 'px'
    } else {
        menu.style.height = '0'
    }
}

btnMobile.addEventListener('click', toggleMenu)

