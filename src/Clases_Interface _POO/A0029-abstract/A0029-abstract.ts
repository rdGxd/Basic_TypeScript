// A classe abstrata nao pode ser instanciada mas ela cria um tipo e ela pode ser estendida e utilizada e todos os métodos dela vão passar pra subclasses E se essa classe abstrata tiver um método ou atributo abstrato significa que eu não preciso nem de valor nem de corpo no método significa que todas as classes que estenderem dessa classe são forçadas a criar essa coisas

export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} ${this.nome} agora tem ${this.vida} de vida...`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = `\u{1F9DD}`;
  bordao(): void {
    console.log(`${this.emoji} GUERREIRAAAAAA AOOOOOO ATAQUEEEE!! `);
  }
}
export class Monstro extends Personagem {
  protected emoji = `\u{1F9DF}`;

  bordao(): void {
    console.log(`${this.emoji} MOOOONNNNSSSSTTTEEERRRR`);
  }
}

const guerreira = new Guerreira(`Guerreira`, 100, 1000);
const monstro = new Monstro(`Monstro`, 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
