//Calculando IMC

let inputAltura = document.getElementById("inputAltura")as HTMLInputElement
let inputPeso = document.getElementById("inputPeso")as HTMLInputElement

let botaoCalcular = document.getElementById("botaoCalcular") as HTMLButtonElement

let P_resultado = document.getElementById("result") as HTMLSpanElement

let altura: number;
let peso: number;

function imc(altura: number, peso: number): number{
   return peso / (altura * altura)
}

botaoCalcular.addEventListener('click',function(){
    const resultado = imc(Number(inputAltura.value), Number(inputPeso.value))
    P_resultado.textContent = resultado.toString();


})

 alert("JS carregou!");