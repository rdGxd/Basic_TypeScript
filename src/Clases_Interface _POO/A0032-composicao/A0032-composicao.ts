/*
Composição é um conceito chave na programação orientada a objetos que descreve a relação entre objetos onde um objeto é composto por outros objetos, mas esses objetos componentes são partes essenciais e inseparáveis do objeto composto. A composição é uma forma de associar objetos e criar estruturas complexas a partir de partes mais especializadas. Aqui estão os principais pontos sobre composição:

Relação "parte-de": A composição representa a relação "parte-de", onde um objeto é composto por outros objetos que são considerados partes essenciais para o funcionamento do objeto composto. Por exemplo, uma classe "Carro" pode ser composta pelas classes "Motor", "Rodas" e "Portas".

Ciclo de Vida Dependente: Uma característica fundamental da composição é que os objetos componentes têm um ciclo de vida dependente do objeto composto. Quando o objeto composto é criado ou destruído, seus componentes também são criados ou destruídos junto com ele.

Relação de Propriedade: Na composição, os objetos componentes geralmente são propriedades da classe composta. Isso significa que as instâncias dos objetos componentes são criadas e gerenciadas pelo objeto composto.

Propriedade por Valor: Os objetos componentes são normalmente instanciados como propriedades por valor, o que significa que cada objeto composto possui suas próprias instâncias dos objetos componentes. Isso garante a independência dos objetos compostos entre si.

Reutilização de Funcionalidades: A composição permite que as funcionalidades sejam divididas em partes especializadas, o que possibilita a reutilização de código e a criação de classes mais coesas e modularizadas.

Encapsulamento: A composição favorece o encapsulamento, pois os detalhes internos de como os objetos componentes funcionam são escondidos do objeto composto. O objeto composto só precisa interagir com as interfaces públicas dos objetos componentes.

Implementação: A composição pode ser implementada por meio da criação de objetos componentes como propriedades da classe composta. Esses objetos componentes podem ser instanciados no construtor do objeto composto ou em outros métodos apropriados.

Em resumo, a composição é uma forma importante de relacionar objetos em programação orientada a objetos, permitindo criar estruturas mais complexas a partir de partes especializadas. Ela oferece a capacidade de dividir funcionalidades em partes menores, possibilitando a reutilização de código e a criação de classes bem encapsuladas.
*/

// Um objeto tem outro objeto como parte dele

export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log(`Motor está ligado...`);
  }

  acelerar(): void {
    console.log(`Motor está acelerando...`);
  }

  parar(): void {
    console.log(`Motor está parando...`);
  }

  desligar(): void {
    console.log(`Motor está desligado`);
  }
}

const carro = new Carro();
carro.ligar();
