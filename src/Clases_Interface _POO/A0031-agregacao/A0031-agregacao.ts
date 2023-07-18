/*
Agregação é um conceito importante na programação orientada a objetos, que descreve a relação entre objetos onde um objeto contém ou é composto por outros objetos. Nesse contexto, o objeto que contém outros é chamado de "objeto agregador" e os objetos contidos são chamados de "objetos agregados". A agregação é uma forma de associar objetos e criar estruturas complexas a partir de componentes mais simples. Aqui estão os principais pontos sobre agregação:

Relação "tem-um": A agregação representa a relação "tem-um", onde um objeto possui um ou mais objetos relacionados a ele. Por exemplo, uma classe "Carro" pode agregar objetos das classes "Motor", "Rodas" e "Portas".

Composição vs. Agregação: Embora as duas ideias estejam relacionadas, a agregação é diferente da composição. Na composição, um objeto é parte essencial de outro objeto e não pode existir independentemente. Na agregação, os objetos agregados podem existir independentemente do objeto agregador.

Ciclo de Vida Independente: Um dos aspectos-chave da agregação é que os objetos agregados têm um ciclo de vida independente do objeto agregador. Quando o objeto agregador é destruído, os objetos agregados podem continuar a existir e serem reutilizados em outras estruturas.

Flexibilidade e Reutilização: A agregação permite criar estruturas complexas a partir de componentes mais simples. Isso proporciona maior flexibilidade e reutilização de código, pois os objetos agregados podem ser utilizados em diferentes contextos.

Associações Bidirecionais: As associações de agregação podem ser unidirecionais ou bidirecionais. Na agregação unidirecional, o objeto agregador "tem" os objetos agregados, mas os objetos agregados não "conhecem" o objeto agregador. Já na agregação bidirecional, os objetos agregados também têm uma referência ao objeto agregador.

Implementação: A agregação pode ser implementada por meio de propriedades dentro da classe, onde os objetos agregados são armazenados como membros da classe agregadora. A criação e destruição dos objetos agregados podem ser gerenciadas pelo próprio objeto agregador.

Em resumo, a agregação é uma forma importante de relacionar objetos em programação orientada a objetos, permitindo criar estruturas mais complexas a partir de componentes mais simples. Ela oferece flexibilidade, reutilização de código e a possibilidade de gerenciar objetos com ciclos de vida independentes.
*/

// Um objeto precisa de outro objeto

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const produto1 = new Produto(`Camiseta`, 42);
const produto2 = new Produto(`Caneca`, 1.9);
const produto3 = new Produto(`Caneta`, 0.9);

const carrinhosDeCompras = new CarrinhoDeCompras();
carrinhosDeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhosDeCompras.valorTotal());
console.log(carrinhosDeCompras.quantidadeProdutos());
