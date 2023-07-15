// Dentro da classe se você quiser chamar o algo estático a PALAVRA THIS NAO IRÁ FUNCIONAR

export class Pessoa {
  static IdadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.IdadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.IdadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Rodrigo', 'Miranda', 25, '000.111.111-00');
const pessoa2 = Pessoa.criaPessoa('Luiz', 'Miranda');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
