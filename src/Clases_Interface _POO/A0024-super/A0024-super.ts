// A palavra SUPER ser para você ter acesso a SUPER CLASS de dentro de uma SUB CLASS

// Super classe -> Base class -> Parent class
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

/* SUB-CLASSES */
// Utilize a palavra SUPER para ter acesso a Super class

// Classe Aluno que herda de Pessoa e modifica o getNomeCompleto()
export class Aluno extends Pessoa {
  constructor(
    // São apenas valores que eu estou recebendo
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    // Algo que eu estou criando dentro de aluno
    public sala: string,
  ) {
    // Enviando os valores que eu to recebendo
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    const result = super.getNomeCompleto();
    return `${result} HEY`;
  }
}
// Classe Cliente que herda Pessoa e modifica o getNomeCompleto()
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 25, '000.111.111-00');
const aluno = new Aluno('Rodrigo', 'Silva', 25, '111.111.111-11', '0001');
const cliente = new Cliente('Carlos', 'Santos', 25, '000.000.000-00');

console.log(aluno);
console.log(pessoa);
console.log(cliente);
// console.log(pessoa);
// console.log(cliente);
