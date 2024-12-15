const { default: Heading } = require("./components/headeing/heading");
const { default: HelloButton } = require("./components/hello-button/hello-button");
import _ from 'lodash';

const heading = new Heading();
const helloButton = new HelloButton();
heading.render(_.upperFirst('home webpack'));
helloButton.render();