"use strict";
/* Ex5:
    Crie uma função que recebe um número e retorna seu antecessor
*/
Object.defineProperty(exports, "__esModule", { value: true });
// --> MINHA FORMA DE FAZER
// function antecessorNumero(numero: number){
//     return --numero; 
// }
// const retornoFuncao = antecessorNumero(-100)
// console.log(retornoFuncao);
// --> OUTRA FORMA DE FAZER
function antecessorNumero(numero) {
    const resposta = numero - 1;
    return resposta;
}
const retornoFuncao = antecessorNumero(1050);
console.log(retornoFuncao);
