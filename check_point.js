function Microondas(comida, tempo)
    {
   if (comida == 'Pipoca') {
       TempoMicroondas(10, tempo);
   } else if (comida == 'Macarrão') {
      TempoMicroondas(8, tempo);
   } else if (comida == 'Carne') {
      TempoMicroondas(15, tempo);
   } else if (comida == 'Feijao') {
      TempoMicroondas(12, tempo);
   } else if (comida == 'Brigadeiro') {
      verificarTempo(8, tempo);
   } else { (!comida) 
       console.log('Comida inexistente');
   }
}
 function TempoMicroondas(tempoPadrao, tempoEscolhido) {
   if (tempoEscolhido > tempoPadrao * 2 && tempoEscolhido < tempoPadrao * 3){
      /*Se não colocasse dois console.log quando o else fosse o correto apareceria duas vezes "Prato pronto, bom apetite!!!"*/ 
      /*Não sei se é o correto tenho que perguntar para o professor*/ 
   console.log("Comida Queimou"),console.log("Prato pronto, bom apetite!!!") ;
    } else if(tempoEscolhido >= tempoPadrao * 3 ){
   console.log("Kabumm"), console.log("Prato pronto, bom apetite!!!");
     } else if ( tempoEscolhido < tempoPadrao ){
   console.log("Tempo Insuficiente");
   /*Coloquei este else aqui pq se não fosse tempo insuficiente ou comida queimou, não iria aparecer nada... não tinha 
   nada no enunciado trate como um bônus*/ 
     } else {tempoEscolhido >= tempoPadrao && tempoEscolhido <= tempoPadrao * 2 
      console.log("Prato pronto, bom apetite!!!");
     }
   }
 Microondas("Pipoca", 10);

 /*GRUPO 4
 Douglas R. Goularte
 Daniela Fuenmayor
 Adam Conservani
 Darlan Oliveira
 Matheus Quirino*/