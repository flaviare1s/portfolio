const btnMobile = document.querySelector('#btn-menu')

function toggleMenu() {
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)


window.onload = function() {
    var alturaCard = document.querySelector('.card').offsetHeight
    var menu = document.getElementById('#menu')
    var nav = document.getElementById('#nav')

    nav.addEventListener('click', function() {
        if (nav.classList.contains('active')) {
            menu.style.height = '0'
            nav.classList.remove('active')
        } else {
            menu.style.height = alturaCard + 'px'
            nav.classList.add('active')
        }
    })
}