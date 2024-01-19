let input = document.getElementById('pegardados');
let paragrafo = document.getElementById('dados');
let codigoPrimeiro = 0;
let contadorCodigo = 0;
let contadorMostrar = 0;

let mostrar = [];
function categoria(codigo, nome) {
    return { codigoPrimeiro: codigo, nome: nome };
}

function pegardadosNome(param) {
    return mostrar[param].nome;
}

mostrar.push(categoria(codigoPrimeiro, "categoria"));

function fazerteste() {
    let teste = 0;
    while (teste < mostrar.length) {
        if (input.value == mostrar[teste].nome){
            alert("Categoria já cadastrada");
            break;
        }
        else{
            teste++;
        }
    }
        if (teste == mostrar.length) {
            codigoPrimeiro++;
            mostrar.push(categoria(codigoPrimeiro, input.value));
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
function cadastrarCodigo(param) {
    return mostrar[param].codigoPrimeiro;
}
function atualizarCodigo(testeComparacao) {
    let criar = document.createElement('div');
    let paragrafoCodigo = document.createTextNode("codigo" + cadastrarCodigo(testeComparacao));
    criar.appendChild(paragrafoCodigo);
    paragrafo.appendChild(criar);
}
function nome(testeComparacao) {
    let criar = document.createElement("div");
    let paragrafoNome = document.createTextNode("Nome: " + pegardadosNome(testeComparacao));
    criar.appendChild(paragrafoNome);
    paragrafo.appendChild(criar);
}
let contar = 0;
function listarCategoria() {
    for (var contadorCodigo = 0; contadorCodigo < mostrar.length; contadorCodigo++) {
        atualizarCodigo(contadorCodigo);
        nome(contadorCodigo);
        contar++;
    }
}