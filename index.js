var nome
var salario

function perguntarColaborador(){
    nome = prompt('Insira o nome do colaborador: ');
    salario = parseFloat(prompt('Insira o salário do colaborador: '));
    calcularAumentoSalario(nome, salario);
}

function calcularAumentoSalario(nome, salario){
    var aumento = 0;

    if (salario <= 1500){
        aumento = 0.2; // 20%
    }else if (salario <= 2000){
        aumento = 0.15; // 15%
    }else if (salario <= 3000){
        aumento = 0.1; // 10%
    }else {
        aumento = 0.05; // 5%
    }

    var novoSalario = salario + (salario * aumento);

    console.log('Nome do colaborador: ' + nome);
    console.log('Salário: R$' + salario);
    console.log('Aumento: ' + (aumento * 100) + '%');
    console.log('Salário reajustado: R$' + novoSalario);

    perguntarNovamente(); // perguntar se deseja calcular novamente 
}

// funcao para perguntar se usuario deseja calcular novamente
function perguntarNovamente() {
    var resposta = prompt('Deseja calcular novamente (s/n)');

    if (resposta == 's'){
        perguntarColaborador(); // reiniciar processo
    } else {
        console.log('Programa encerrado.');
    }
}
