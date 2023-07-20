// Generics padrão -> Array, Promise

type meuTipo = number;

const arrayNumbers: Array<number> = [1, 2, 3, 4, 5];
console.log(arrayNumbers);

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<meuTipo | number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log(resultado + 1));
minhaPromise().then((resultado) => console.log(resultado + 1));
