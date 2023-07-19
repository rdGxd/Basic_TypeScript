// Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O Titulo',
  texto: 'O texto',
  // data: new Date(),
};

// Encadeamento opcional -> Perguntando se existe no objeto
console.log(documento.data?.toDateString());

// Operador de coalescência nula -> Verificando se o operador do lado esquerdo do operador é um NÃO VALOR -> NULL | UNDEFINED
console.log(documento.data?.toDateString() ?? `1-Ixi, não existe data.`);
console.log(undefined ?? `2-Ixi, não existe data.`);
console.log(null ?? `3-Ixi, não existe data.`);
console.log(false ?? `4-Ixi, não existe data.`); // -> retorna false
console.log(0 ?? `4-Ixi, não existe data.`); // -> retorna 0
console.log(`` ?? `4-Ixi, não existe data.`); // -> retorna ``
