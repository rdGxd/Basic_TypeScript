// Simplesmente eu to falando que uma classe usa outra classe pra fazer determinada coisa sem que elas dependam necessariamente uma da outra

/*
A associação é um princípio fundamental na programação orientada a objetos que permite que classes se relacionem entre si, criando conexões e interações entre objetos. Pode ser unidirecional ou bidirecional, e existem tipos especiais de associação, como agregação e composição.

Os principais pontos sobre associação são:

Estabelece relacionamentos entre classes.
Pode ser unidirecional ou bidirecional.
Pode ser de multiplicidade um para um, um para muitos, muitos para um ou muitos para muitos.
Pode ser representada por linhas, setas ou indicadores especiais.
Permite modelar relacionamentos do mundo real.
Facilita a criação de sistemas mais flexíveis e escaláveis.
Através da associação, é possível criar estruturas complexas em um sistema orientado a objetos, permitindo que objetos cooperem entre si para realizar tarefas e comportamentos mais avançados. Essa técnica é amplamente utilizada em projetos de software para criar soluções bem estruturadas e organizadas.
*/

export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get nome(): string {
    return this._nome;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this._ferramenta === null) {
      console.log(`Nào posso escrever sem ferramenta...`);
      return;
    }
    this.ferramenta?.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor(`Rodrigo`);
const caneta = new Caneta(`bic`);
const maquina = new MaquinaEscrever(`dell`);

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquina.nome);

escritor.ferramenta = caneta;
escritor.ferramenta = maquina;
escritor.escrever();
