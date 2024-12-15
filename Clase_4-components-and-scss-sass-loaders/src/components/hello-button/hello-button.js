import './hello-button.scss'
class HelloButton{

    render(){
        const button = document.createElement('button');
        button.innerText = 'Go hello';
        button.classList.add('hello-button');
        const body = document.querySelector('body');
        body.appendChild(button);
        button.onclick = (e) => {
            const p = document.createElement('p');
            p.innerText = 'Esta explicación puede hacer que se entienda la importancia de dominar los conceptos fundamentales, incluso en roles no estrictamente de desarrollo.';
            p.classList.add('hello-text');
            body.appendChild(p);
            e.preventDefault();
        }
    }
}

export default HelloButton;