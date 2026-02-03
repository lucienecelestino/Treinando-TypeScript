"use strict";
/*Ex2
    A função recebe um parâmetro do tipo number e retorna o resultado da multiplicação por 2
*/
Object.defineProperty(exports, "__esModule", { value: true });
//passando um argumento para ser usado dentro da função
function Multiplicacao(parametro) {
    return parametro * 2;
}
const retornoFuncao = Multiplicacao(5);
console.log(retornoFuncao);
