// Void é quando uma função ou um método não retorna nada
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Rodrigo',
  sobrenome: 'Silva',

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('Rodrigo', 'Luiz');
pessoa.exibirNome();

export { pessoa };
