// USE O SISTEMA DE MODULES SEMPRE QUE POSSÍVEL, namespace em ultimo caso

// Se a gente quiser um escopo para gente criar qualquer coisa dentro desse escopo usamos o namespace

/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNamespace {
  export const name = `Rodrigo`;

  // Se você quiser usar algo do name namespace fora dele use export
  export class PersonNameSpace {
    constructor(public name: string) {}
  }

  const person = new PersonNameSpace(`Rodrigo`);
  console.log(person);

  // Você pode criar um namespace dentro de outro -> Se quiser ter acesso a dentro desse namespace tera que exporta ele
  export namespace OtherNamespace {
    export const name2 = `Silva`;
  }
}

// Usando algo do namespace fora dele
const person = new MyNamespace.PersonNameSpace(`Rodrigo`);
console.log(person);
console.log(MyNamespace.name);
console.log(MyNamespace.OtherNamespace.name2);
