# Abstração

Permite isolar de um objeto somente os conceitos que são necessário para o funcionamento do programa.

A abstração é um conceito fundamental na programação orientada a objetos (POO) que permite representar objetos do mundo real como entidades simplificadas e focar nos aspectos relevantes para o sistema em questão.

Em termos simples, a abstração envolve identificar as características e comportamentos essenciais de um objeto e criar uma representação em forma de classe que encapsula essas informações. Essa classe abstrata é uma representação geral e genérica de um objeto, sem se preocupar com detalhes específicos de implementação.

A abstração permite criar modelos conceituais que representam objetos do mundo real de forma simplificada, capturando apenas as informações relevantes. Por exemplo, ao modelar um sistema bancário, podemos criar uma classe "Conta Bancária" que abstrai os atributos importantes, como número da conta, saldo e métodos relacionados, como "depositar" e "sacar". Essa classe abstrata nos permite interagir com objetos de conta bancária sem nos preocupar com os detalhes internos da implementação.

Uma das principais vantagens da abstração é a capacidade de criar hierarquias de classes, em que classes mais específicas herdam características de classes mais genéricas. Isso permite uma melhor organização e reutilização de código. Por exemplo, podemos ter uma classe abstrata "Animal" e classes derivadas como "Cachorro", "Gato" e "Pássaro", que herdam atributos e comportamentos da classe "Animal" e adicionam características específicas de cada tipo de animal.

Em resumo, a abstração na POO envolve a criação de classes abstratas que representam objetos do mundo real de forma simplificada, focando apenas nas características e comportamentos essenciais. Isso permite a modelagem conceitual, a reutilização de código e a organização hierárquica de classes. A abstração é uma ferramenta poderosa para lidar com a complexidade dos sistemas e criar representações mais gerenciáveis dos objetos do mundo real.

### Resumo Abstração

A abstração é um conceito essencial na programação orientada a objetos (POO) que envolve a criação de classes abstratas para representar objetos do mundo real de forma simplificada, focando apenas nas características e comportamentos relevantes. A abstração permite criar modelos conceituais e hierarquias de classes, promovendo a reutilização de código, a organização e a modularidade. Ao abstrair objetos, podemos interagir com eles sem nos preocupar com os detalhes de implementação, simplificando o desenvolvimento e facilitando a compreensão do sistema. Em resumo, a abstração na POO permite criar representações simplificadas e genéricas dos objetos, capturando apenas o necessário para o sistema em questão.

## Aqui está um exemplo simples em TypeScript para ilustrar a abstração:

```ts
abstract class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void;

  introduce(): void {
    console.log(`Hi, I'm ${this.name}!`);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Woof woof!');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow meow!');
  }
}

// Criando instâncias de objetos
const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

dog.introduce(); // Saída: Hi, I'm Buddy!
dog.makeSound(); // Saída: Woof woof!

cat.introduce(); // Saída: Hi, I'm Whiskers!
cat.makeSound(); // Saída: Meow meow!
```

Neste exemplo, temos uma classe abstrata Animal que define a estrutura básica de um animal. Ela possui um atributo name e um método abstrato makeSound(). A classe também possui um método introduce() que mostra uma introdução básica do animal.

Em seguida, temos duas classes derivadas Dog e Cat que herdam da classe Animal. Cada uma delas implementa o método abstrato makeSound() com seu próprio som característico.

Podemos criar instâncias de objetos utilizando as classes Dog e Cat e chamar os métodos introduce() e makeSound(). Cada objeto irá apresentar sua introdução e fazer seu som específico.

Esse exemplo demonstra a abstração, onde a classe abstrata Animal representa a ideia geral de um animal, e as classes derivadas Dog e Cat adicionam suas próprias implementações específicas.
