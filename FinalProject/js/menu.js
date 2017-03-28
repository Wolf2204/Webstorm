function buttonClick() {
    var button = event.target;
    var menu = document.querySelector('div.menu');
    if (button.matches('button.hello')) {
        menu.classList.toggle('active');

    }

}

document.body.addEventListener('click', buttonClick);