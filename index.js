document.querySelector('main#main').remove();
let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
document.body.prependChild(newHeader);
newHeader.innerHTML = 'YOUR-NAME is the champion';
