var listElement = document.querySelector('#lista ul');


var nomes = [
    'Diego',
    'Gabriel',
    'Lucas'
];

function renderNomes() {
    listElement.innerHTML = '';

    for (nome of nomes) {
        var nomeElement = document.createElement('li');
        var nomeText = document.createTextNode(nome);

        nomeElement.appendChild(nomeText);
        listElement.appendChild(nomeElement);
    }
}

renderNomes();