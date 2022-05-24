
function insertElement(){ 
let body = document.querySelector('body');
let div = document.createElement('div');
let content = document.createTextNode;
content = "Hello World!";
div.textContent = content;
body.appendChild(div);
}
module.exports = insertElement;
