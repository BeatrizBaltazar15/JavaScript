import entradaDados from 'readline-sync';

let num = entradaDados.questionInt("Informe o número da tabuada");
let cont = 0;
while( cont<=10) {
    let resultado = num * cont;
    console.log(`${num} x ${cont} = ${resultado}`);
    cont ++;
}