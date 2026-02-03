/* Ex3:
    Crie uma função que recebe duas palavras(string) e retorna sua concatenção. Ou seja junta as duas Palavras
*/

function concatenaString(nome: string, sobrenome: string){
    return nome + " " + sobrenome;
}

const retornoFuncao = concatenaString("Luciene", "Celestino");
console.log(retornoFuncao);