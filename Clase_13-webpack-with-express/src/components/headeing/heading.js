import './heading.scss'
class Heading{

    render(){
        const header = document.createElement('h1');
        header.innerText = 'Header webpack';
        header.classList.add('header');
        const body = document.querySelector('body');
        body.appendChild(header);
    }
}

export default Heading;