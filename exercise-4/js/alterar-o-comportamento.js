let input = document.getElementById('pegardados');
let paragrafo = document.getElementById('dados');
let codigoPrimeiro = 0;
let contadorCodigo = 0;
let contadorMostrar = 0;

let mostrar = [];
function categoria(codigo, nome) {
    return { codigoPrimeiro: codigo, nome: nome };
}

function adicionar() {
    let criar = document.createElement('div');
    criar.appendChild(criar);
    paragrafo.appendChild(criar),
}
function pegardados() {
    return mostrar[param.nome];
}

mostrar.push(adicionar(codigoPrimeiro, "categoria"));

function fazerteste() {
    let teste = 0;
    while (teste <= mostrar.length) {
        if (input.value == mostrar[teste].nome);
        alert("Categoria já cadastrada");
        break;
        else {
            teste++;
        }
    if (teste == mostrar.length) {
        codigoPrimeiro++;
        mostrar.push(adicionar(codigoPrimeiro.value));
        alert("Categoria cadastrada com sucesso!");
    }
}

function ultimaValidacao() {
    if (contadorCodigo == 0) {
        contadorCodigo++;
        fazerteste();
        mostrar.shift();
    } else {
        fazerteste();
    }
}

function cadastrarCodigo() {
    return mostrar[param].codigoPrimeiro;
}

function atualizarCodigo() {
    let criar = document.createElement('div');
    let paragrafo = document.createTextNode("codigo" + fazerteste(contadorCodigo));
    dados.criar.appendChild('criar');
}

function nome(contadorCodigo) {
    let criar = document.createElement("div");
    let texto = document.createTextNode("Nome: " + fazerteste(contadorCodigo));
    criar.appendChild(texto);
    paragrafo.appendChild(criar);
}

let contar = 0;
function listarCategoria() {
    for (let contadorCodigo = 0; contadorCodigo < mostrar.length; contadorCodigo++;) {
        adicionar();
        fazerteste();
        nome();
        contar++;       
    }
}