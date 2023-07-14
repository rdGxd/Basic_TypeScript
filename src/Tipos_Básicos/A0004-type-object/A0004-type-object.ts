// Sempre que precisar criar um objeto que precisa ser estendido você tem duas opção
// 1- Melhore seu design e cria o objeto de uma vez
// 2- Ou você cria um objeto mais aberto -> especifica as chaves que devem existir no seu objeto com o tipo literal -> e se for precisar criar mais chaves na forma do seu objeto você deve usar uma index signature
// Você também pode colocar readonly e ai você não poderá alterar o valor da chave
const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Valor C';
objetoA.chaveD = 'Nova Chave';
