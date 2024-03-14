import entradaDados from 'readline-sync';

//let nome = entradaDados. question("Informe sewu nome: ");
//console.log(`Olá, ${nome}!`);

let x = entradaDados.questionInt("x: ");
let y = entradaDados.questionFloat("y: ");
console.log(` Total: ${x+y}`);