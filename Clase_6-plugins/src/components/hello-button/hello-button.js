import './hello-button.scss'
class HelloButton{
    cssClass = 'hello-button';
    render(){
        const button = document.createElement('button');
        button.innerText = 'Go hello';
        button.classList.add(this.cssClass);
        const body = document.querySelector('body');
        body.appendChild(button);
        button.onclick = (e) => {
            const p = document.createElement('p');
            p.innerText = '';
            p.classList.add('hello-text');
            body.appendChild(p);
        }
    }
}

export default HelloButton;