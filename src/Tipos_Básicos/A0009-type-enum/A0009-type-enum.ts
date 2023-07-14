// Usada quando a gente tem mais de uma opção e precisa enumerar as coisas
enum Cores {
  // Você pode altera o index fazendo VERMELHO = 10
  // enum numérico
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

// Fazendo merge
enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

// console.log(Cores);
// console.log(Cores.VERMELHO); // Se acessado pelo valor você irar pegar o index
// console.log(Cores[0]); // Se acessado pelo index você irar pegar o valor

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);
