# Herança

Visa passar características de um objeto para outro

Herança é um conceito fundamental na programação orientada a objetos (POO) que permite que uma classe derive características e comportamentos de outra classe. Na herança, uma classe é chamada de classe base ou superclasse, e a classe que herda essas características é chamada de classe derivada ou subclasse.

A classe derivada herda todos os atributos e métodos da classe base, o que significa que ela pode reutilizar o código existente e estender ou modificar seu comportamento conforme necessário. Isso promove a reutilização de código e a organização hierárquica de classes.

A herança permite que a classe derivada adicione novos atributos e métodos específicos, além de modificar ou substituir os existentes. Ela pode acessar e utilizar os atributos e métodos da classe base, além de adicionar sua própria implementação.

Um exemplo simples seria uma classe base chamada "Veículo" e uma classe derivada chamada "Carro". A classe "Veículo" pode ter atributos e métodos genéricos, como "cor" e "acelerar". A classe "Carro" herda esses atributos e métodos e também pode ter atributos específicos, como "marca" e métodos específicos, como "tocarBuzina". Dessa forma, a classe "Carro" reutiliza o código da classe "Veículo" e adiciona suas próprias características.

A herança permite criar uma hierarquia de classes, onde classes mais específicas herdam de classes mais genéricas. Isso facilita a modelagem de objetos do mundo real, capturando as semelhanças e diferenças entre eles.

Em resumo, a herança na programação orientada a objetos permite que uma classe derivada herde atributos e métodos de uma classe base, promovendo a reutilização de código e permitindo a criação de hierarquias de classes. Isso facilita a organização e modelagem de objetos do mundo real.

### Resumo Herança

A herança é um conceito fundamental na programação orientada a objetos (POO) que permite que uma classe derivada herde características e comportamentos de uma classe base. A classe derivada pode reutilizar o código existente da classe base, estendendo ou modificando seu comportamento conforme necessário. Isso promove a reutilização de código, a organização hierárquica de classes e a modelagem de objetos do mundo real. A herança permite que a classe derivada adicione novos atributos e métodos específicos, além de acessar e utilizar os atributos e métodos da classe base. Em resumo, a herança na POO facilita a criação de relacionamentos entre classes, permitindo a criação de hierarquias e a especialização de objetos.

## Aqui está um exemplo simples em TypeScript para ilustrar a herança:

```ts
class Vehicle {
  protected brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  getBrand(): string {
    return this.brand;
  }

  drive(): void {
    console.log(`Driving the ${this.brand}`);
  }
}

class Car extends Vehicle {
  private numWheels: number;

  constructor(brand: string, numWheels: number) {
    super(brand);
    this.numWheels = numWheels;
  }

  getNumWheels(): number {
    return this.numWheels;
  }

  honk(): void {
    console.log(`${this.brand} is honking!`);
  }
}

// Criando instância de objeto
const car = new Car('Toyota', 4);

console.log(car.getBrand()); // Saída: Toyota
console.log(car.getNumWheels()); // Saída: 4

car.drive(); // Saída: Driving the Toyota
car.honk(); // Saída: Toyota is honking!
```

Neste exemplo, temos uma classe Vehicle que representa um veículo genérico. Ela possui um atributo protegido brand e métodos para obter a marca (getBrand()) e dirigir o veículo (drive()).

Em seguida, temos a classe Car, que herda da classe Vehicle. Ela adiciona um atributo privado numWheels (número de rodas) e implementa o método honk() (buzinar).

Ao criar uma instância da classe Car, podemos acessar os métodos herdados da classe Vehicle, como getBrand() e drive(). Além disso, podemos chamar os métodos específicos da classe Car, como getNumWheels() e honk().

Esse exemplo demonstra a herança, onde a classe Car herda características e comportamentos da classe Vehicle e também adiciona suas próprias propriedades e métodos específicos. Através da herança, é possível reutilizar e estender o código de uma classe base, criando uma hierarquia de classes que representam objetos relacionados.
