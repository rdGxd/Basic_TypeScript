// Criando classes
// Quando você cria uma classe você pode utilizar ela como VALOR ou TIPO

// Maneira Longa
export class Empresa {
  /*
  0- Defina se ele é publico (public) Vai poder se acessado e alterado fora da classe ou privado (private)
  1- Se você nao definir se ele é public, protected ou private ele é automaticamente definido com o public
  2- Depois se é readonly (apenas vai ser LIDO e não poderá ser alterado ) ou não
  */

  public readonly nome: string; // public não necessário
  protected readonly cnpj: string;
  // Inicializando campo diretamente
  private readonly colaboradores: Colaborador[] = [];

  constructor(nome: string, cnpj: string) {
    // Inicializando o campo pelo construtor
    this.nome = nome;
    this.cnpj = cnpj;
  }

  // Criando método para colocar os colaboradores (A MAIORIA DOS MÉTODOS SÃO PÚBLICOS)
  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  // Método para mostrar os colaboradores
  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

// Maneira cura
export class Colaborador {
  // No atalho você precisa informa se é public, private ou protected
  constructor(
    // Dentro do construtor você já pode fazer tudo
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Rodrigo', 'Silva');
const colaborador2 = new Colaborador('Luiz', 'Otávio');
const colaborador3 = new Colaborador('Rafa', 'wel');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
// Também pode ser feito assim
empresa1.adicionaColaborador({
  nome: 'Carlos',
  sobrenome: 'Santos',
});
empresa1.mostrarColaboradores();
