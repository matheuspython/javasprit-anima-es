var iconMenu = document.querySelectorAll('.icon-menu')

iconMenu[0].addEventListener('click', () => {
    let menu = document.getElementById('menu')
    if (menu.classList.contains('hide')) { //verifica se o menu tem a classse hide la pra entrar no if
        menu.classList.add('show') //adiciona a classe show
        menu.classList.remove('hide') //remove a classe hide
    } else {
        menu.classList.add('hide')
        menu.classList.remove('show')
    }

})