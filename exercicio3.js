import entradaDados from 'readline-sync';

let x = entradaDados.questionInt("x: ");
let y = entradaDados.questionFloat("y: ");
let calculadora= entradaDados.questionInt("`Qual operação deseja?")
 switch (calculadora) {
    case 1:
        console.log(`Total: ${x+y}`)
        break;
    case 2:
        console.log(`Total: ${x-y}`)
        break
    case 3:
        console.log(`Total: ${x*y}`)
        break
    case 4:
        console.log(`Total: ${x/y}`)
    default:
        console.log(`Essa operação não exixte!`)
        break;
 }