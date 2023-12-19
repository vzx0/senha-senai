


// Todas variáveis
var entradaSenha = document.getElementById('entradaSenha');
var medidorPoder = document.querySelector('.medidorPoder');
var medidorFundo = document.querySelector('.medidorFundo'); // Adicionado
var requisitoComprimento = document.getElementById('requisitoComprimento');
var requisitoMinusculo = document.getElementById('requisitoMinusculo');
var requisitoMaiusculo = document.getElementById('requisitoMaiusculo');
var requisitoNumero = document.getElementById('requisitoNumero');
var requisitoSimbolo = document.getElementById('requisitoSimbolo');
var textoPoder = document.getElementById('textoPoder');
var verSenha = document.getElementById('verSenha');

//Função senha
entradaSenha.addEventListener('input', function () {
    var senha = entradaSenha.value;
    var poder = verificarPoder(senha);
    //cores baseadas na força da senha (vermelho, amarelo, rosa)
    var cor = poder < 50 ? 'red' : poder < 80 ? '#fdc200' : '#ff90e8';

    //transições CSS
    medidorPoder.style.width = poder + '%';
    medidorPoder.style.backgroundColor = cor;

    // Adicionado para garantir que a barra de fundo seja sempre visível
    medidorFundo.style.width = '100%';
    textoPoder.textContent = 'Força da Senha: ' + poder + '%';
    atualizar(senha);     // atualiza os requisitos
});

verSenha.addEventListener('click', function () {
    entradaSenha.type = entradaSenha.type === 'password' ? 'text' : 'password';
});

//função para calcular a força da senha
function verificarPoder(senha) {
    var comprimentoMinimo = 8;
    var possuiMinusculo = /[a-z]/.test(senha);
    var possuiMaiuscula = /[A-Z]/.test(senha);
    var possuiNumeros = /\d/.test(senha);
    var possuiSimbolo = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(senha);

    //pontos com base nas regras
    var poder = 0;

    if (senha.length >= comprimentoMinimo) {
        poder += 20;
        requisitoComprimento.classList.remove('vermelho');
        requisitoComprimento.classList.add('verde');
    } else {
        requisitoComprimento.classList.remove('verde');
        requisitoComprimento.classList.add('vermelho');
    }

    if (possuiMinusculo) {
        poder += 20;
        requisitoMinusculo.classList.remove('vermelho');
        requisitoMinusculo.classList.add('verde');
    } else {
        requisitoMinusculo.classList.remove('verde');
        requisitoMinusculo.classList.add('vermelho');
    }

    if (possuiMaiuscula) {
        poder += 20;
        requisitoMaiusculo.classList.remove('vermelho');
        requisitoMaiusculo.classList.add('verde');
    } else {
        requisitoMaiusculo.classList.remove('verde');
        requisitoMaiusculo.classList.add('vermelho');
    }

    if (possuiNumeros) {
        poder += 20;
        requisitoNumero.classList.remove('vermelho');
        requisitoNumero.classList.add('verde');
    } else {
        requisitoNumero.classList.remove('verde');
        requisitoNumero.classList.add('vermelho');
    }

    if (possuiSimbolo) {
        poder += 20;
        requisitoSimbolo.classList.remove('vermelho');
        requisitoSimbolo.classList.add('verde');
    } else {
        requisitoSimbolo.classList.remove('verde');
        requisitoSimbolo.classList.add('vermelho');
    }

    return Math.min(100, poder);
}

function atualizar(senha) {
    verificarPoder(senha);
}

// Função: Ver requisitos
function verRequisitos() {
    var requisitos = document.getElementById('requisitos');
    requisitos.style.display = requisitos.style.display === 'none' || requisitos.style.display === '' ? 'block' : 'none';
}
