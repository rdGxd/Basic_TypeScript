/*
typeof:
A palavra-chave typeof é usada para obter o tipo de uma expressão em tempo de compilação. Essa palavra-chave permite que você obtenha o tipo de uma variável, função ou qualquer outro valor, sem a necessidade de criar um tipo manualmente.
*/
type CoresObj = typeof coresObj;

/*
keyof:
A palavra-chave keyof é usada em TypeScript para obter a lista de chaves de um determinado tipo (objetos ou interfaces). Ela permite que você acesse automaticamente as chaves disponíveis em um tipo, sem precisar escrevê-las manualmente. Isso é particularmente útil em cenários em que você precisa iterar sobre as chaves de um tipo ou acessar propriedades específicas de um objeto de forma segura.
*/
type CoresChaves = keyof CoresObj;

// Em resumo, keyof obtém as chaves de um tipo, enquanto typeof obtém o tipo de uma expressão em TypeScript.

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
