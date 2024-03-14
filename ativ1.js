import entradaDados from 'readline-sync';

let tabuada = entradaDados.questionInt("Informe o número da tabuada");
let cont = 0;
while( cont<=10){
    let resultado = tabuada * cont;
    console.log(`${tabuada} x ${cont} = ${resultado}`);
    cont ++;
}