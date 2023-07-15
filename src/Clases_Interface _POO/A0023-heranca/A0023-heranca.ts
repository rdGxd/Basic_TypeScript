// Classe principal
export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

// Classe Aluno que herda de Pessoa e sobrescreve o getNomeCompleto()
export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do aluno: ${this.nome} ${this.sobrenome}`;
  }
}
// Classe Cliente que herda Pessoa e sobrescreve o getNomeCompleto()
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 25, '000.111.111-00');
const aluno = new Aluno('Rodrigo', 'Silva', 25, '111.111.111-11');
const cliente = new Cliente('Carlos', 'Santos', 25, '000.000.000-00');
console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
