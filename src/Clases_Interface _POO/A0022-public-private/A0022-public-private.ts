/* ATRIBUTO PUBLIC */
// Atributo public ou método public -> Ele é acessível dentro e fora da classe e em todas as sub-classes dessa classe
// Public é o método padrão eu não preciso colocar public quando eu for criar algo que seja public
// Se você for utilizar o atalho é preciso falar public

/* ATRIBUTO PRIVATE */
// O atributo private ele só acessível dentro da classe que ele foi criado -> Excelente para encapsulamento
// Quando a gente tem dados sensíveis a gente coloca ele como private e sempre possível readonly
// Se eu quiser disponibilizar isso para fora da classe eu crio métodos públicos

/* SE FOR UTILIZAR O ATALHO PRECISA FALAR SE É public, private ou protected */

export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    readonly nome: string,
    readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Rodrigo', 'Silva');
const colaborador2 = new Colaborador('Luiz', 'Otávio');
const colaborador3 = new Colaborador('Rafa', 'wel');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.adicionaColaborador({
  nome: 'Carlos',
  sobrenome: 'Santos',
});
empresa1.mostrarColaboradores();
