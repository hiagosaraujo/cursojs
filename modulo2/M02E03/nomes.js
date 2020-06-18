var listElement = document.querySelector('#lista ul');
var inputElement = document.querySelector('#lista input');
var buttonElement = document.querySelector('#lista button');

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

function adicionar() {
    var nomeText = inputElement.value;

    nomes.push(nomeText);
    inputElement.value = '';
    renderNomes();
}

buttonElement.onclick = adicionar;