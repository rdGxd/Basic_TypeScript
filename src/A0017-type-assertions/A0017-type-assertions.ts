/* Recomendado */
// Condicional -> Se você não tem a certeza que o elemento existe use esse tipo
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion -> Só faça isso se tiver a total certeza que o elemento existe
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement -> Use para especificar qual é tipo do elemento HTML selecionado
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';

/* NÃO RECOMENDADO */
// Non-null assertion (!) no final
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Não posso jogar qualquer tipo apenas sub-tipos
const body4 = document.querySelector('body') as number;

// Improvável que você use
const body5 = document.querySelector('body') as unknown as number;
