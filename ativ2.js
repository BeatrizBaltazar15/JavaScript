import entradaDados from 'readline-sync'

let media_bimestral =0;
let cont = 0;
let n = 0;
let media = 0;
let alunos = entradaDados.questionInt("Digite a quantidade de alunos da sala:")

while (cont<alunos){

    while (n<4){
        let nota = entradaDados.questionInt(`Nota do bimestre ${n+1}: `);
        media = media + nota;
        n ++;
    }
cont++
console.log(` A media do aluno ${cont} é igual ${media/4}!`);
media_bimestral = (media/4) + media_bimestral
media =0;
n = 0;
}
console.log(`A media bimestral dos alunos é igual ${media_bimestral/alunos}`)

