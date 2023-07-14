# Polimorfismo

Algo que é polimorfo tem a habilidade de assumir diferentes formas.

```ts
class AnimalSounds {
  public playSound(animal: Animal): void {
    animal.makeNoise();
  }
}

const dog = new Dog('Tina');
const cat = new Cat('Suzy');
const animalSounds = new AnimalSounds();
animalSounds.playSound(dog); // Tina está fazendo AU AU...
animalSounds.playSound(cat); // Suzy está fazendo MIAU...
```

Polimorfismo é um conceito importante na programação orientada a objetos (POO) que permite que diferentes objetos compartilhem o mesmo nome, mas se comportem de maneira diferente. Em outras palavras, você pode ter diferentes classes que implementam um método com o mesmo nome, mas cada classe pode executar o método de forma distinta.

Vamos usar um exemplo para ilustrar isso. Imagine que você tem uma classe chamada "Animal" e duas classes derivadas dela, "Cachorro" e "Gato". Todas essas classes têm um método chamado "fazerBarulho".

Quando você chama o método "fazerBarulho" em um objeto do tipo "Cachorro", ele irá latir. Mas se você chamar o mesmo método em um objeto do tipo "Gato", ele irá miar. Apesar de ambos os objetos terem o método "fazerBarulho", cada um deles se comporta de maneira diferente, dependendo do tipo de animal.

Isso é possível porque o polimorfismo permite que você trate objetos de diferentes classes de maneira uniforme. Você pode ter um código que chama o método "fazerBarulho" em um objeto do tipo "Animal" sem se preocupar com o tipo específico do animal. O comportamento correto será executado automaticamente com base no tipo real do objeto.

Em resumo, o polimorfismo na POO permite que objetos diferentes compartilhem o mesmo nome de método, mas cada objeto pode ter sua própria implementação desse método, resultando em comportamentos diferentes. Isso proporciona flexibilidade e reutilização de código em projetos de programação orientada a objetos

### Resumo polimorfismo

O polimorfismo é um conceito na programação orientada a objetos (POO) que permite que objetos de diferentes classes compartilhem o mesmo nome de método, mas cada classe pode ter sua própria implementação desse método. Isso significa que objetos diferentes podem se comportar de maneiras diferentes quando um método comum é chamado. O polimorfismo proporciona flexibilidade e reutilização de código, permitindo tratar objetos de diferentes classes de forma uniforme. Isso é possível porque o comportamento correto é determinado pelo tipo real do objeto em tempo de execução.

## Aqui está um exemplo simples em TypeScript para demonstrar o polimorfismo:

```ts
class Shape {
  calculateArea(): number {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(
    private width: number,
    private height: number,
  ) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Criando instâncias de objetos
const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);

// Chamando o método calculateArea() de forma polimórfica
console.log(rectangle.calculateArea()); // Saída: 50
console.log(circle.calculateArea()); // Saída: 153.93804002589985
```

Neste exemplo, temos uma classe base abstrata Shape que define um método calculateArea() que retorna o valor da área. Essa implementação na classe base é apenas um esboço genérico, pois não faz sentido calcular a área de uma forma genérica.

Em seguida, temos as classes derivadas Rectangle e Circle, que herdam da classe Shape. Cada uma dessas classes implementa seu próprio método calculateArea() específico para calcular a área corretamente com base em suas dimensões.

Ao criar instâncias de objetos das classes Rectangle e Circle, podemos chamar o método calculateArea() de forma polimórfica, ou seja, usando o mesmo nome de método em objetos de diferentes classes. O comportamento correto é executado automaticamente com base no tipo real do objeto.

Isso demonstra o polimorfismo, onde diferentes objetos podem compartilhar o mesmo nome de método, mas cada objeto executa sua própria implementação desse método. O polimorfismo permite tratar objetos de diferentes classes de forma uniforme, chamando os mesmos métodos, mas obtendo resultados diferentes com base na implementação específica de cada classe.
