import textHeader from './text-header.txt';

function addHeader(){
    const header = document.createElement('h1');
    header.innerText = textHeader;
    header.style.color = 'red';
    const body = document.querySelector('body');
    body.appendChild(header);
};

export default addHeader;