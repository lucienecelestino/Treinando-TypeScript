"use strict";
/* Ex6:
    Crie uma função que recebe uma variável e retorna seu tipo.
    Observação: Usamos o operador typeof para determinar o tipo da variável.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function determinandoTipo(verificaVariavel) {
    return (typeof verificaVariavel);
}
const retornoFuncao = determinandoTipo("DEU CERTO!!");
console.log(retornoFuncao);
