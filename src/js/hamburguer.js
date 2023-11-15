let menuButton = document.querySelectorAll('img.menu-button');
let menuHide = document.querySelectorAll('ul.menu-hide');
let menuXButton = document.querySelectorAll('img.icon-x');

for (let i in menuButton) {
    menuButton[i].addEventListener('click', () => {
        menuHide[i].style.display = 'block';
    });

    menuXButton[i].addEventListener('click', () =>{
        menuHide[i].style.display = 'none';
    })
}

