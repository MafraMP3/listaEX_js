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

function ativdade1(){
    let soma = 0;
    let continuar = true;   

    while(continuar === true){
        let numero = parseFloat(prompt("Digite um numero: "));

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

somarNumeros();