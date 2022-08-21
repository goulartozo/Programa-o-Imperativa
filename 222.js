const pratos = {
    1: { nome: 'Pipoca', tempo: 10 },
    2: { nome: 'Macarrão', tempo: 8 },
    3: { nome: 'Carne', tempo: 15 },
    4: { nome: 'Feijão', tempo: 12 },
    5: { nome: 'Brigadeiro', tempo: 8 },
  };
  
  function fazerPrato(numeroPrato, tempo) {
    const prato = pratos[numeroPrato];
  
    if (!prato) {
      return console.log('Prato inexistente');
    }
  
    let mensagem;
    const tempoPadrao = prato.tempo;
  
    if (tempo < tempoPadrao) {
      mensagem = 'Tempo insuficiente';
    } else if (tempo > tempoPadrao * 2 && tempo <= tempoPadrao * 3) {
      mensagem = 'A comida queimou';
    } else if (tempo > tempoPadrao * 3) {
      mensagem = 'Kabummm';
    } else {
      mensagem = 'Prato pronto, bom apeite!!!';
    }
  
    return console.log(mensagem);
}


function TempoMicroondas(tempoPadrao, tempoEscolhido) {
  if (tempoEscolhido < tempoPadrao){
    console.log("Tempo Insuficiente");
  } else if  (tempoEscolhido > tempoPadrao * 2 && tempoEscolhido <= tempoPadrao * 3){
    console.log("Comida Queimou");
  } else (tempoEscolhido > tempoPadrao * 3) 
    console.log("Kabumm");
    
    console.log("Prato pronto, bom apetite!!!");
}
