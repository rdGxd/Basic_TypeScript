// A classe abstrata nao pode ser instanciada mas ela cria um tipo e ela pode ser estendida e utilizada e todos os métodos dela vão passar pra subclasses E se essa classe abstrata tiver um método ou atributo abstrato significa que eu não preciso nem de valor nem de corpo no método significa que todas as classes que estenderem dessa classe são forçadas a criar essa coisas

/*
Em TypeScript (e em outras linguagens de programação orientadas a objetos), a palavra-chave "abstract" é usada para definir classes abstratas. Uma classe abstrata é uma classe que não pode ser instanciada diretamente, ou seja, não é possível criar objetos a partir dela. Ela serve como uma classe base para outras classes que estendem suas funcionalidades.

Principais pontos sobre classes abstratas:

Classes abstratas não podem ser instanciadas diretamente.
Podem conter métodos abstratos, que são declarados sem implementação e devem ser definidos pelas subclasses.
Podem conter métodos concretos, que possuem implementação e podem ser herdados pelas subclasses.
São usadas como classes base para criar hierarquias de classes especializadas.
A palavra-chave "abstract" é utilizada para declarar uma classe como abstrata.
As classes abstratas fornecem uma estrutura comum para subclasses compartilharem funcionalidades, promovendo o reuso de código e facilitando a criação de hierarquias bem definidas. Elas são uma ferramenta importante para modelar comportamentos gerais e garantir a consistência do código em sistemas orientados a objetos.
*/

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
