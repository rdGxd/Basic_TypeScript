/*
Em TypeScript (TS), uma "interface" é uma forma de definir a estrutura de um objeto. Ela descreve os tipos de propriedades e métodos que um objeto deve ter. Ao criar uma interface, você está essencialmente definindo um contrato que os objetos devem seguir para serem considerados do tipo dessa interface.

Interfaces são uma poderosa ferramenta para descrever a forma esperada dos objetos em TypeScript, tornando o código mais seguro, legível e manutenível. Elas ajudam a capturar erros em tempo de compilação, permitindo que você detecte problemas em seu código antes de executá-lo.
*/

// Geralmente você usa interface para modelar objetos

// Geralmente quando você for trabalhar com interface você esta modelando uma forma e esta querendo deixar isso claro
interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
  // nomeCompleto: () => string;
}

// type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

// Sempre que eu for utilizar um tipo no lugar de extends eu uso implements

export class Pessoa implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  public nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa(`Rodrigo`, `Silva`);
const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
  nome: `Rodrigo`,
  sobrenome: `Silva`,
};
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
