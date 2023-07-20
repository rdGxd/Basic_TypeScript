// Decorator -> Objeto impostor -> Finge ser seu objeto mas meio do caminho ele pode decorar seu objeto -> observar o que se objeto ta fazendo, modificar seu objeto ou ele pode substituir seu objeto por completo

// Decorator -> é uma função que vai receber a classe que você quer decorar

// Agora a classe animal ta passando automaticamente pelo decorator
@decorator
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {}
}

// Recebe a classe no parâmetro target
// Quase igual a uma tipagem de uma função você so precisa colocar o new
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  // Classe anonima
  return class extends target {
    cor: string;
    nome: string;

    // Modificando alguma coisa na hora da criação da classe
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

const animal = new Animal(`Rodrigo`, `roxo`);
console.log(animal);
