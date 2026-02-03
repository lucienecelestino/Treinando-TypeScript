"use strict";
/* Ex4:
    Crie uma função que recebe um número e retorna true se for positivo
*/
Object.defineProperty(exports, "__esModule", { value: true });
function numeroPositivo(verificarNumero) {
    if (verificarNumero >= 0) {
        console.log("O número é Positivo");
        return true;
    }
    else {
        console.log("O número é Negativo");
        return false;
    }
}
const retornoFuncao = numeroPositivo(-5);
console.log(retornoFuncao);
