// never -> esse método ou função nunca vai retornar nada
// Pode ser utilizada para lançar um erro ou é um loop infinito

export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
