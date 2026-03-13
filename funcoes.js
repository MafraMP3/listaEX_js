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