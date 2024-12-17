import bgImge from './bg.jpg';
import './bg-img.scss';

class BgImage {
    render(altText) {
        const img = document.createElement('img');
        img.src = bgImge;
        img.alt = altText;
        img.classList.add('bg-img');
        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default BgImage;