// Overload de funções -> uma função se comporta de maneira diferente baseado na quantidade parâmetros e nos tipos de parâmetros

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

// X Sempre vai existir
// Y pode ser opcional se for o valor nao for enviado vai o valor padrão vai ser 0 (y || 0)
// ...args vai receber um array de números e fazer a soma

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) {
    return args.reduce((soma, valor) => soma + valor, 0) + x + (y || 0);
  }
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
