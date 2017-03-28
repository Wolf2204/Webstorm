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
   // el.style.backgroundImage = 'url("+newSrc+")';
    el.style.backgroundColor = 'black';
    //el.style.backgroundSize = 'contain';
   // el.style.backgroundRepeat = 'no-repeat';
    el.style.position = 'fixed';
    el.style.zIndex = '9999';
    el.style.top = '0';
    el.style.left = '0';
    image.src = newSrc;
    el.appendChild(image);
    image.style.height = '100%';
    el.style.textAlign = 'center';


    el.addEventListener('click', function () {
        document.body.removeChild(el);
    });

    document.body.appendChild(el);

}