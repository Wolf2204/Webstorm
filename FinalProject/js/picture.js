window.addEventListener('load', function () {

    var picture = document.body.querySelector('.certificates');

    picture.addEventListener('click', function () {
        var target = event.target;
        if (target.matches('img.pic')) {
            newImage(target);
        }
    });

    function newImage(img) {
        var newSrc = img.src.replace('images', 'large');
        var el = document.createElement('div');
        var image = document.createElement('img');
        el.style.width = "100%";
        el.style.height = "100%";
        el.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        el.style.position = 'fixed';
        el.style.zIndex = '9999';
        el.style.top = '0';
        el.style.left = '0';
        image.src = newSrc;
        el.appendChild(image);
        image.style.height = '100%';
        image.style.animation = 'large 0.5s linear';
        el.style.textAlign = 'center';


        el.addEventListener('click', function () {
            document.body.removeChild(el);
        });

        document.body.appendChild(el);

    }
});