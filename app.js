let listaNumerosSorteados = [];
let numeroMax = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
mensagemInicial();

function criarCampo(tag,texto){
let campo = document.querySelector (tag);
campo.innerHTML = texto
}

function mensagemInicial(){
  criarCampo('h1','Número Secreto');
  criarCampo('p',`Escolha um número de 1 a ${numeroMax}!`)
}

function verificarChute(){
  let chute = document.querySelector('input').value;
  if( chute == numeroSecreto){
    criarCampo('h1','Acertou!')
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você achou o número secreto com ${tentativas} ${palavraTentativa}!`
    criarCampo('p',mensagemTentativas)
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if(chute < numeroSecreto){
      criarCampo('p','Tente um número maior!')
    } else{
      criarCampo('p','Tente um número menor!')
    }
    tentativas++;
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 10 + 1);
  let qtdDeElementosLista = listaNumerosSorteados.length;

  if(qtdDeElementosLista == numeroMax){
    listaNumerosSorteados = [];
  }

  if(listaNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else {
    listaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo(){
  document.querySelector('input').value = '';
}

function  reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}
