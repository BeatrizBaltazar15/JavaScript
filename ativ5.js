import rl from 'readline-sync'
for (let i=1; i<=2; i++) {
    let nome = rl.question(`Informe o nome da ${i}ª pessoa:`);
    let salario = rl.questionFloat(`Informe o salario de ${nome}:`);
    let impostoRenda = 0;
    if (salario<=2100) {
        impostoRenda=0;
    }else if (salario<=2800) {
        impostoRenda = salario*0,75;
    }else if (salario<=3750){
        impostoRenda = salario*0,15;
    }else if (salario<=4660){
        impostoRenda = salario*0,225;
    }else{
        impostoRenda= salario*0,275;
    }
    console.log(`\nImposto de Renda a ser pago:`);
    console.log(`\ Nom:${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}\n`)
}