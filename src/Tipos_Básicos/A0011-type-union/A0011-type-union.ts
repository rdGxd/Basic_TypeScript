// Você pode mandar quantos tipos você quiser

// Quando eu tenho mais de um tipo em alguma coisa eu posso falar isso pro TypeScript utilizando o sinal de " | " -> OU

// É uma má prática fazer uma função fazer mais de uma coisa
function addOrCocat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrCocat(10, 20));
console.log(addOrCocat('10', '20'));
