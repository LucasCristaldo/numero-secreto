let numeroSorteados = [];// Aqui so guarda os valores que já foram sorteados, para que eles nao se repitam
let numeroSorteadoMax = 100;
let numero_aleatorio = gerarNumeroAleatorio(); 
// Aqui dentro tem um return de um numero, e antes ele verifica se pode entrar na lista, se ele ja entrou uma vez,
// vai olhar para o numeroSorteados e vai ver se esse cara já entrou aqui antes.
let numeroSorteadoMaxLimite = numeroSorteadoMax;

let tentativas = 1;

/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';


let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
        {rate:1.3}
    );
}


function gerarNumeroAleatorio()
{
    let numerozinho = parseInt(Math.random() * numeroSorteadoMax + 1);
    // se eu botei 10, ele só pode tirar o valor 10, se eu botar o '+1'
    let tamanhoDaLista = numeroSorteados.length;
    if (tamanhoDaLista == numeroSorteadoMax)
    {
        numeroSorteados = [];
    }

    if (numeroSorteados.includes(numerozinho))
    {
        return gerarNumeroAleatorio();
    } 
    else
    {
        numeroSorteados.push(numerozinho);
        return numerozinho;
    }

}

function exibirMensagemInicial()
{
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroSorteadoMaxLimite}`);
}

exibirMensagemInicial();


function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarNovoJogo()
{
    numero_aleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;

    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute()
{
    let chute = document.querySelector('input').value
   
    if (numero_aleatorio == chute)
    {
        let trys = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'ACERTOU!');
        exibirTextoNaTela('P', `Você acertou o número secreto com ${tentativas} ${trys} !`);

        document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else
    {
        limparCampo();
        if (numero_aleatorio > chute)
        {
            exibirTextoNaTela('p', 'O número secreto é MAIOR');
        }
        else
        {
            exibirTextoNaTela('p', 'O número secreto é MENOR!');
        }
        tentativas++;
    }

    
}
