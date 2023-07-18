/*
A implementação de tipos alias em classes permite criar nomes personalizados para tipos complexos ou compostos, tornando o código mais legível e facilitando a reutilização de tipos em várias partes do projeto. Os tipos alias são criados usando a palavra-chave type e são particularmente úteis quando combinados com classes. Aqui estão os principais pontos a serem considerados:

Declaração de Tipos Alias: Para criar um tipo alias, utiliza-se a palavra-chave type seguida do nome do alias, um sinal de igual =, e a definição do tipo que deseja-se nomear. Isso pode incluir tipos primitivos, tipos personalizados, tipos de união, tipos de interseção e outros tipos complexos.

Uso em Propriedades e Métodos: Os tipos alias podem ser usados para anotar propriedades e métodos de uma classe, permitindo especificar o tipo de valor que a propriedade contém ou o tipo de retorno de um método.

Reutilização de Tipos: Uma das principais vantagens dos tipos alias é a reutilização de tipos em diferentes partes do código. Isso pode ser especialmente útil quando uma classe possui várias propriedades com tipos semelhantes ou quando se trabalha com tipos complexos que são usados em várias classes.

Combinando com Interfaces e Herança: Os tipos alias podem ser combinados com interfaces e classes que implementam essas interfaces. Isso possibilita a criação de classes com assinaturas de métodos precisas, baseadas em tipos alias.

Melhor Legibilidade: Ao utilizar tipos alias em vez de tipos complexos diretamente, o código pode se tornar mais claro e fácil de entender, pois os nomes personalizados podem descrever melhor a finalidade e o contexto do tipo.

Facilitando Refatorações: O uso de tipos alias facilita futuras refatorações do código, pois qualquer alteração feita na definição do tipo alias afetará automaticamente todos os lugares onde o alias é utilizado.

Em resumo, a implementação de tipos alias em classes em TypeScript oferece uma maneira poderosa de criar nomes personalizados para tipos complexos, melhorando a legibilidade, reutilização e manutenção do código. Isso resulta em um código mais robusto e com maior capacidade de evolução.
*/

type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  // nomeCompleto(): string;
  nomeCompleto: () => string;
};

// Sempre que eu for utilizar um tipo no lugar de extends eu uso implements

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  public nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa(`Rodrigo`, `Silva`);

console.log(pessoa.nomeCompleto());
