export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    // Por convenção coloca-se o  "_" antes do nome da variável que esta sustentando o valor
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(valor: string) {
    console.log('SETTER CHAMADO');
    this._cpf = valor;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 25, '000.111.111-00');
pessoa.cpf = '123.456.789-00';
console.log(pessoa.cpf);
