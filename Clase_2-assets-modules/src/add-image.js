import bg from './bg.jpg'

function addImage(){

    const imgTag = document.createElement('img');
    imgTag.width = 500;
    imgTag.alt = 'img-bg';
    imgTag.src = bg;
    const body = document.querySelector('body');
    body.appendChild(imgTag);
}

export default addImage;