export function add(a: unknown, b: unknown): number | string {
  return typeof a === `number` && typeof b === `number` ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add(`a`, `b`));

/*
Type Guards em TypeScript são recursos que permitem verificar dinamicamente o tipo de uma variável em tempo de execução. Existem quatro formas principais de usar Type Guards:

typeof: Verifica o tipo primitivo (number, string, boolean, etc.) de uma variável.
instanceof: Verifica se uma variável é uma instância de uma classe específica.
in: Verifica se uma chave existe em um objeto.
Custom Type Guards: Funções personalizadas para verificar tipos específicos.
Ao aplicar Type Guards, você pode tomar decisões condicionais com base nos tipos, tornando seu código mais seguro quando lida com tipos de união.
*/

type Pessoa = { tipo: `pessoa`; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  // if (`nome` in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log(obj.cor);
  }
}

mostraNome(new Aluno('Rodrigo'));
mostraNome({ tipo: 'animal', cor: 'Rosa' });
