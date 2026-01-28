// Exercício 6 da lista 02 - Laço condicional switch

// Entrar com o nome do colaborador, o código do cargo, o salário real e imprimir o nome, o código do cargo, o salário real e o salário reajustado conforme o percentual de reajuste.
//1 - Gerente - 10%
//2 - Vendedor - 7%
//3 - Supervisor - 9%
//4 - Motorista - 6%
//5 - Estoquista - 5%
//6 - Técnico de TI - 8%
//Fórmula do calculo --> SalarioReajustado = salárioReal + (taxaReajuste * salarioReal)
console.log("Exercício 2 - Calculo de reajuste salarial de acordo com o cargo\n");
const leia = require('readline-sync');
let nome, codigoCargo, salarioReal, salarioReajustado, taxaReajuste, cargo; 

console.table([{codigoCargo: 1, cargo: "Gerente", reajuste: "10%" },
                { codigoCargo: 2, cargo: "Vendedor", reajuste: "7%" },
                { codigoCargo: 3, cargo: "Supervisor", reajuste: "9%" },
                { codigoCargo: 4, cargo: "Motorista", reajuste: "6%" },
                { codigoCargo: 5, cargo: "Estoquista", reajuste: "5%" },
                { codigoCargo: 6, cargo: "Tecnico de TI", reajuste: "8%"}])
                



nome = leia.question("Digite o nome do colaborador: \n"); //Lê o nome do colaborador
codigoCargo = leia.questionInt("Digite o codigo do cargo: \n"); //Lê o código do cargo


switch (codigoCargo){

    case 1: //Gerente
        taxaReajuste = 0.10;
        cargo = "Gerente";
        break;
    case 2: //Vendedor
        taxaReajuste = 0.07;
        cargo = "Vendedor";
        break;
    case 3: //Supervisor
        taxaReajuste = 0.09;
        cargo = "Supervisor";
        break;
    case 4: //Motorista
        taxaReajuste = 0.06;
        cargo = "Motorista";
        break; 
    case 5: //Estoquista
        taxaReajuste = 0.05;
        cargo = "Estoquista";
        break;
    case 6: //Técnico de TI
        taxaReajuste = 0.08;
        cargo = "Tecnico de TI";
        break;
    default: //Código inválido
        console.log("Codigo de cargo invalido! Por favor, escolha um codigo valido.");
        break;
        
}
if (codigoCargo > 6 || codigoCargo < 1) return; //Encerra o programa se o código do cargo for inválido
salarioReal = leia.questionFloat("Digite o salario real: \n"); //Lê o salário realMate
salarioReajustado = salarioReal + (taxaReajuste * salarioReal); //Cálculo do salário reajustado

console.log(`Nome do colaborador: ${nome}\n
            Cargo: ${cargo}\n
            Salario reajustado${new Intl.NumberFormat('pt-BR', { 
        style: 'currency', currency: 'BRL' 
    }).format(salarioReajustado)}`);


