// O Decorador é chamado na hora da criação da classe

function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log(`Sou o decorador e recebi ${target}`);
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
      this.cor = `Qualquer Coisa`;
    }

    inverte(valor: string): string {
      return valor.split(``).reverse().join();
    }
  };
}

@inverteNomeECor
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log(`Sou a classe`);
  }
}

const animal = new Animal(`Rodrigo`, `roxo`);
console.log(animal);
