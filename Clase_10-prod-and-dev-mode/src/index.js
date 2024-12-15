const { default: Heading } = require("./components/headeing/heading");
const { default: HelloButton } = require("./components/hello-button/hello-button");


const heading = new Heading();

const helloButton = new HelloButton();
heading.render();
helloButton.render();