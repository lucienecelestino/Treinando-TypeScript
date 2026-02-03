"use strict";
/* Ex3:
    Crie uma função que recebe duas palavras(string) e retorna sua concatenção. Ou seja junta as duas Palavras
*/
Object.defineProperty(exports, "__esModule", { value: true });
function concatenaString(nome, sobrenome) {
    return nome + " " + sobrenome;
}
const retornoFuncao = concatenaString("Luciene", "Celestino");
console.log(retornoFuncao);
