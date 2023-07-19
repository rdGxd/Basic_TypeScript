/*
Em TypeScript, os genéricos são uma poderosa funcionalidade que permite criar funções, classes e interfaces parametrizadas por tipos. Utilizando a sintaxe <T> (ou qualquer outro identificador) para representar um tipo genérico, é possível escrever código que pode ser reutilizado com diferentes tipos de dados sem a necessidade de duplicação. Os genéricos oferecem maior flexibilidade e segurança de tipos, permitindo a criação de estruturas de dados e algoritmos mais genéricos e robustos. Isso torna o código mais versátil, facilitando o desenvolvimento de bibliotecas e aplicativos mais eficientes e escaláveis.
*/

// Quando eu não sei exatamente qual coisa eu vou receber ali geralmente eu vou precisar informar

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);

const arrayFiltrado = meuFilter(array, (value) => value < 5);

console.log(arrayFiltrado);
console.log(arrayFiltradoOriginal);
