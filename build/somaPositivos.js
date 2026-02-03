"use strict";
/* Ex7:
    Crie uma função que recebe dois número e retorna a soma deles se o resultado for positivo ou zero. Se der negativo, retorna "Número Negativo"
*/
Object.defineProperty(exports, "__esModule", { value: true });
function somaPositivo(numero1, numero2) {
    let soma = numero1 + numero2;
    if (soma >= 0)
        return soma;
    else {
        return "Número Negativo";
    }
}
const retornoFuncao = somaPositivo(50, -60);
console.log(retornoFuncao);
