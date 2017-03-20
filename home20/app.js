function spanClickListener () {

    var span = event.target;
    var d = document.querySelector('.active');

    if (span.matches('p span')) {
        span.classList.toggle('active');
        if (d !== span) {
            d.classList.remove('active');

        }

    }
}

document.body.addEventListener('click', spanClickListener);
