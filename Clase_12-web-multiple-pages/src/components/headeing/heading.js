import './heading.scss'
class Heading{

    render(name){
        const header = document.createElement('h1');
        header.innerText = name;
        header.classList.add('header');
        const body = document.querySelector('body');
        body.appendChild(header);
    }
}

export default Heading;