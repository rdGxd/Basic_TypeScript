// Generics com classes (estrutura de dados pilha)

export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}

// Estrutura de dados -> STACK

export class Stack<T> {
  private contador = 0;
  // Assinatura do objeto
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.contador] = element;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return;

    this.contador--;
    // Pegando elemento que eu quero deletar e salvando em uma variável
    const elemento = this.elements[this.contador];
    // Deletando elemento
    delete this.elements[this.contador];
    return elemento;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  size(): number {
    return this.contador;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.showStack();

while (!stack.isEmpty()) {
  console.log(stack.pop());
}
