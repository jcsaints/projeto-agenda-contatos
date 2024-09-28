const form = document.getElementById('formContato');
let linhas = '';

const names = [];
const numbers = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLinha();
    atualizaTabela();
    atualizaNumeros();

});

function addLinha() {
    const inputNomeContato = document.getElementById('nomeContato');
    const inputNumeroContato = document.getElementById('numeroContato');

    if (numbers.includes(inputNumeroContato.value)) {
        alert(`Número: ${inputNumeroContato.value} ja cadastrado!`);
    } else {
        names.push(inputNomeContato.value);
        numbers.push(inputNumeroContato.value);

        let linha = `<tr>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td class = 'numeros'>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = linhas;
}

function totalInput() {
    return names.length;
}

function atualizaNumeros() {
    const total = totalInput();
    document.getElementById('totalNumeros').innerHTML = total;
}