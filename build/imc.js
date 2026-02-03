"use strict";
//Calculando IMC
Object.defineProperty(exports, "__esModule", { value: true });
let inputAltura = document.getElementById("inputAltura");
let inputPeso = document.getElementById("inputPeso");
let botaoCalcular = document.getElementById("botaoCalcular");
let P_resultado = document.getElementById("result");
let altura;
let peso;
function imc(altura, peso) {
    return peso / (altura * altura);
}
botaoCalcular.addEventListener('click', function () {
    const resultado = imc(Number(inputAltura.value), Number(inputPeso.value));
    P_resultado.textContent = resultado.toString();
});
alert("JS carregou!");
