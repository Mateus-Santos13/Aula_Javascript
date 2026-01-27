let nome = "Mateus Santos"; //Definição de variável -- Javascript não precisa definir o tipo da variável
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 3500.90;
const bonus = 0.05;


console.log("O tipo da variável nome é: " + typeof (nome)); // Verifica o tipo de variável

if (salarioBruto > 1000){
    var mensagem = "Salario > 1000";
    console.log(mensagem);
}


console.log("Salário líquido:" ,

    new Intl.NumberFormat('us-US', { 
        style: 'currency', currency: 'USA' 
    }).format(salarioBruto + (salarioBruto * bonus)) //Tentar quebrar as linhas de código para facilitar leitura e correção dos códigos
);