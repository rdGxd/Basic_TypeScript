// Unknown é um any mas seguro -> ele te força a fazer a checagem de tipos antes de você fazer qualquer operação com aquele valor no unknown

// Sempre que você precisar receber alguma coisa com antecedência e você não sabe o que vai ser use UNKNOWN -> Sabendo que você vai ter que checar o tipo sempre que você utilizar essa variável para fazer alguma operação com ela

let x: unknown;
const y = 800;

// fazendo checagem
if (typeof x === 'number') console.log(x + y);
