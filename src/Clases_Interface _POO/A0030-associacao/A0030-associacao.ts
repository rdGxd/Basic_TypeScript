// Simplesmente eu to falando que uma classe usa outra classe pra fazer determinada coisa sem que elas dependam necessariamente uma da outra

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
