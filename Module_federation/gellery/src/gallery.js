import BgImage from './components/bg-img/bg-img';
import _ from 'lodash';


const bgImage = new BgImage();


bgImage.render(_.upperFirst('galeria webpack'));

import ('HelloButtonApp/HelloButton').then(HelloButton => {
    console.log(HelloButton.default);
    const helloButton = new HelloButton.default();
    helloButton.render();
});