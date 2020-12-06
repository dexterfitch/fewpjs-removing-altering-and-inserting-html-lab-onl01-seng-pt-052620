document.querySelector('main#main').remove();
let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML('<p>BIRDS</p>');
document.body.appendChild(newHeader);
