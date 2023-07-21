// Decoradores de método

// Eu posso usar o decorador de método para assistir ou editar as coisas dentro dele

// O retorno pode ser um PropertyDescriptor, any ou void

function decorator(
  classPrototype: any,
  nameMethod: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(descriptor);
  return {
    value: (...args: any[]) => {
      return args[0].toUpperCase();
    },
  };
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

  @decorator
  method(msg: string): string {
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
