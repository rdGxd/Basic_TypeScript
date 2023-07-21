// Decoradores de parâmetro -> Ele so funciona para você assistir o que ele é ou tem

function decorator(
  classPrototype: any,
  nameMethod: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(index);
}

export class APerson {
  name: string;
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  method(@decorator msg: string): string {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

  get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = words.join(` `);
  }
}

const person = new APerson(`Rodrigo`, `Silva`, 25);
const method = person.method(`Olá mundo!`);
console.log(method);
