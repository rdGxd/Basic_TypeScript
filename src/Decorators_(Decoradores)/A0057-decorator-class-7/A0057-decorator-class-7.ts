// Decoradores de propriedade

function decorator(classPrototype: any, name: string | symbol): any {
  console.log(classPrototype);
  console.log(name);
  let valuePrototype: any;
  return {
    get: () => valuePrototype,
    set: (value: any) => {
      if (typeof value === `string`) {
        valuePrototype = value.split(``).reverse().join(``);
        return;
      }
      valuePrototype = value;
    },
  };
}

export class APerson {
  @decorator
  name: string;
  @decorator
  lastName: string;
  @decorator
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

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
