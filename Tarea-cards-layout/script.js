const body = document.querySelector('body');
const imgContainer = document.createElement('div');

const description = document.createElement('p');
description.textContent = 'Este es Mario'
description.style.textAlign = 'center';

imgContainer.appendChild(description);
imgContainer.style.display = 'flexbox';

function displayImg(imgUrl, elt) {

    imgContainer.style.animation = 'fadeIn .8s';
    
    body.appendChild(imgContainer);
    

    imgContainer.innerHTML = `<img src='${imgUrl}'>`;

    imgContainer.classList.add('displayMe');

    console.log('sise pudo?')

    imgContainer.style.top = (elt.offsetTop + 40) + 'px';

    imgContainer.style.left = (elt.offsetLeft + 'px');

    let difference = document.documentElement.clientWidth - elt.offsetLeft;

    if(difference < 250){

        imgContainer.style.right = '20px'
        imgContainer.style.left = 'auto'
    } else{

        imgContainer.style.left = elt.offsetLeft + 'px';
    }

}

function removeImg() {

    imgContainer.style.animation = 'fadeOut .8s'

    setTimeout(() => {
    body.removeChild(imgContainer)
    }, 750);
}
