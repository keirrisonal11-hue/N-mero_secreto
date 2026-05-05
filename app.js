let  numeroMaximo = 100, contador = 0;
let listaNumerosSorteados = [];
let numeroAleatorio = numeroRandom(numeroMaximo);

exibirMensagem(numeroMaximo);

function insercaoCampos(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    
    if(chute == numeroAleatorio){
        contador++;
        let tipoMensagem = contador > 1? 'tentativas' :  'tentativa';
        let mensagem = `Parabéns você descobriu o número secreto com ${contador} ${tipoMensagem}`;

        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);

        insercaoCampos('h1', 'FIM DE JOGO');
        insercaoCampos('p', mensagem);
    }
    else{
        if(chute > numeroAleatorio){
            insercaoCampos('h1', 'ERROU');
            insercaoCampos('p', 'O número secreto é menor');
        }
        else{
            insercaoCampos('h1', 'ERROU');
            insercaoCampos('p', 'O número secreto é maior');

        }
        contador++;
        limparCampo()
    }



}
function numeroRandom(numero){
    if(listaNumerosSorteados.length == numero){
        listaNumerosSorteados.length = 0;
    }

    let numeroEscolhido =  parseInt(Math.random() * numero + 1);
    if(listaNumerosSorteados.includes(numeroEscolhido)){
       return numeroRandom(numero);
    }
    else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    contador = 0;
    numeroAleatorio = numeroRandom(numeroMaximo);
    limparCampo();
    exibirMensagem(numeroMaximo);
    document.getElementById('chutar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
function exibirMensagem(numero){
    insercaoCampos('h1', 'Jogo do número secreto');
    insercaoCampos('p', `Escolha um número de 1 a ${numero}`);
}