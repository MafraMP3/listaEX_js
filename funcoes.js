// console.log("Hello World");

// let nome = "Davi Sefnem";
// const pi = 3.14;
// let n1 = 1;
// let n2 = 2;

// console.log(nome);

// console.log(n1+n2);

// function somar(x,y){
//     console.log(x+y);
// }
// function saudacao(){
//     console.log("Olá, meu nome é " + nome);
// }
// somar(5,5);
// saudacao()



function atividade1(){
    let soma = 0;
    let continuar = true;   

    while(continuar === true){
        let numero = parseFloat(prompt("Digite um numero: (Ou 0 para encerrar)"));

        if(isNaN(numero)){
            alert("Por favor, digite um numero valido");
        }
        
        if(numero==0){
            continuar = false;
            return;
        }else{
            soma+= numero;
        }
        continuar = confirm("Deseja adicionar mais um numero?");
    }
    alert("A soma dos numeros é: " + soma);
}



function atividade2(){
   
    for(let i = 10; i>=0;i--){
        alert(i);
    }
    alert("Lançamento realizado!");
}



function atividade3(){
    let gasto =0;
    let bruto =0;
    let saldoFim

    for (let i = 1; i <= 12; i++){
        bruto += parseFloat(prompt("Insira o bruto do " + i +"° mês."));
        gasto += parseFloat(prompt("Insira o ganho do " + i +"° mês."));
    }
    saldoFim = bruto-gasto

    alert("O saldo fincanceiro do ano foi: R$:" + saldoFim);
    alert("O ganho bruto anual foi de: R$:" + bruto);
    alert("O gasto anual foi de: R$:" + gasto);
}

function atividade4(){
    let vetor = [];
    let aux;

    for (let i = 0; i <4; i++){
        vetor[i] = parseInt(prompt("Insira um numero"));
    }
    for (i=0; i<4; i++){
        for (let j=0; j<3;j++){
           if(vetor[j] < vetor[j+1]){
            aux = vetor[j];
            vetor[j] = vetor[j+1];
            vetor[j+1] = aux;
           } 
        }

    }
    alert("Os numeros ordenados em forma decrescente ficam assim:" + vetor[0] + "-" + vetor[1] + "-" + vetor[2] + "-" + vetor[3]);
}

function atividade5(){
    let numero = 0;

    numero = parseInt (prompt( "Insira um numero inteiro"));

    if(numero %2 == 0){
        alert(" Seu numero é par");
    }else{
        alert("Seu numero é impar");
    }
}

function atividade6(){
    let letra;

    letra = prompt("Insira uma letra do alfabeto");

    if(letra == 'a' || letra == 'e' || letra == 'i' || letra =="o" || letra == 'u'){
        alert("Sua letra é uma vogal");
    } else {
        alert("Sua letra é uma consoante");
    }
}
function atividade7(){
    let id;

    id = prompt("Insira  o codigo do produto");
    switch(id) {
        case 'a':
            alert("O valor do sorvete de chocolate é R$:1,50.");
            break;
        
        case 'b':
            alert("O valor do sorvete de morango é R$:2,50.");
            break;
        
        case 'c':
            alert("O valor do sorvete de creme é R$:2,50.");
            break;
        
        case 'd':
            alert("O valor do sorvete de manga é R$:3,20.");
            break;
        
        case 'e':
            alert("O valor do sorvete de melancia é R$:3,40.");
            break;
        
        case 'f':
            alert("O valor do sorvete de vanila ice é R$:3,00.");
            break;
        
        case 'g':
            alert("O valor do sorvete de ceu azul é R$:3,60.");
            break;
        
        case 'h':
            alert("O valor do sorvete de brownie é R$:4,00.");
            break;

         case 'i':
            alert("O valor do sorvete de hawaiano é R$:5,00.");
            break;
        
    }
}

function atividade8(){
    let n1;
    let n2;
    let resultado;

    n1 = Math.floor(Math.random() * 10);
    n2 = Math.floor(Math.random() * 10);

    alert("A primeira variavel é: " + n1);
    alert("A segunda variavel é: " + n2);

    alert("A diferença delas é:" + (n1 - n2));
    resultado = ((n1*2) + (n2 *3));
    alert(" O dobro da primeira variável somado ao triplo da segunda é: " + resultado);
    resultado = (n1 * n2);
     alert("A multiplicação das variaveis é: " + resultado);
}

function atividade9(){
    let n1;
    let n2;

    n1 = Math.floor(Math.random() * 10);
    n2 = Math.floor(Math.random() * 10);

    if(n1 > n2){
        alert("Os valores, em ordem crescente são: " + n1 + n2);
    }else{
        alert("Os valores, em ordem crescente são: " + n2 + n1);
    }

}

function atividade10(){
    let nome;
    let salarioBruto;
    let salarioLiquido;

    nome = prompt("Insira o nome do funcionario");
    salarioBruto = prompt("Insira o salario bruto do funcionario");

    salarioLiquido = (salarioBruto - (salarioBruto*0.08));
    alert("O salario bruto do funcionario "+nome+" é "+salarioBruto+", descontando 8% do inss, o salario liquido fica: "+salarioLiquido);
}

function atividade11(){
    let nome;
    let salarioBruto;
    let salarioLiquido;
    let desconto = 0.08;

    nome = prompt("Insira o nome do funcionario");
    salarioBruto = prompt("Insira o salario bruto do funcionario");

    if(salarioBruto>1000){
        desconto = 0.085;
    }if(salarioBruto>1500){
        desconto = 0.09;
    }

    salarioLiquido = (salarioBruto - (salarioBruto*0.08));
    alert("O salario bruto do funcionario "+nome+" é "+salarioBruto+", multiplicando por "+desconto+" do inss, o salario liquido fica: "+salarioLiquido);
}