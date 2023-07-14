# Encapsulamento

Visa ocultar partes internas de um objeto e exibir apenas o necessário para uso externo.

O encapsulamento é um princípio importante na programação orientada a objetos (POO) que consiste em esconder os detalhes internos de um objeto e fornecer uma interface clara e controlada para interagir com ele.

Em outras palavras, o encapsulamento envolve agrupar dados (atributos) e comportamentos (métodos) relacionados em uma única unidade, chamada de classe. Essa classe define as propriedades e operações disponíveis para o objeto criado a partir dela.

O encapsulamento busca proteger os dados de uma classe, tornando-os privados e permitindo o acesso a eles apenas por meio de métodos públicos, também conhecidos como getters e setters. Os getters são métodos que permitem obter o valor de um atributo, enquanto os setters permitem alterar ou definir um valor para um atributo.

Ao encapsular os atributos, é possível controlar e validar o acesso aos dados, aplicar lógica adicional antes de permitir uma modificação e evitar que dados inválidos sejam armazenados. Isso ajuda a garantir a consistência e a integridade dos objetos.

O encapsulamento também proporciona uma camada de abstração, na qual os detalhes internos de implementação são ocultados do uso externo. Isso permite que os objetos interajam entre si por meio de interfaces bem definidas, facilitando a manutenção, a reutilização e a modificação do código.

Em resumo, o encapsulamento na POO envolve agrupar dados e comportamentos relacionados em uma classe, ocultando os detalhes internos e fornecendo uma interface controlada para interagir com o objeto. Isso ajuda a proteger e controlar o acesso aos dados, garantindo a integridade e a consistência dos objetos, além de facilitar a manutenção e a reutilização do código.

### Resumo Encapsulamento

O encapsulamento é um princípio chave na programação orientada a objetos (POO) que envolve agrupar dados e comportamentos relacionados em uma classe e ocultar os detalhes internos. Os atributos da classe são protegidos e o acesso a eles é controlado por meio de métodos públicos. Isso garante a integridade dos dados, permite a validação e a aplicação de lógica adicional antes de modificar os valores e facilita a reutilização e a manutenção do código. O encapsulamento também cria uma camada de abstração, escondendo a implementação interna dos objetos e fornecendo uma interface clara para interagir com eles. Em resumo, o encapsulamento promove a segurança dos dados, a modularidade do código e a abstração de detalhes internos.

## Aqui está um exemplo simples em TypeScript para demonstrar o encapsulamento:

```ts
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    if (age >= 0) {
      this.age = age;
    }
  }
}

// Criando instância de objeto
const person = new Person('John Doe', 25);

console.log(person.getName()); // Saída: John Doe
console.log(person.getAge()); // Saída: 25

person.setName('Jane Smith');
person.setAge(-30); // Tentando definir uma idade negativa, que será ignorada

console.log(person.getName()); // Saída: Jane Smith
console.log(person.getAge()); // Saída: 25 (idade não foi modificada)
```

Neste exemplo, temos uma classe Person que representa uma pessoa. Os atributos name e age são definidos como privados usando o modificador private. Isso significa que esses atributos só podem ser acessados e modificados dentro da própria classe.

A classe Person possui métodos getName() e setName() para obter e definir o nome, respectivamente. Da mesma forma, temos os métodos getAge() e setAge() para obter e definir a idade.

Ao criar uma instância de Person e chamar os métodos getter e setter, podemos acessar e modificar os atributos encapsulados name e age. A validação é aplicada no método setAge() para garantir que a idade não seja definida como um valor negativo.

Isso demonstra o encapsulamento, pois os atributos privados são protegidos e só podem ser acessados ou modificados através dos métodos públicos fornecidos. Isso permite um controle mais preciso sobre os dados e a lógica associada a eles.
