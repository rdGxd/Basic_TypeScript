type VotationOption = {
  numberOfVotes: number;
  option: string;
};

// Votação
export class Votation {
  // Array para opções de votação
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  // Adicionando votos
  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  // Computando os votos na opção
  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationAPP {
  private votation: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votation.push(votation);
  }

  showVotation(): void {
    for (const votation of this.votation) {
      console.log(votation.details);
      for (const votationOptions of votation.votationOptions) {
        console.log(votationOptions.option, votationOptions.numberOfVotes);
      }
      console.log('####');
      console.log('');
    }
  }
}

const votation1 = new Votation(`Qual usa linguagem de programação favorita ?`);
votation1.addVotationOption({ option: `Python`, numberOfVotes: 0 });
votation1.addVotationOption({ option: `JavaScript`, numberOfVotes: 0 });
votation1.addVotationOption({ option: `TypeScript`, numberOfVotes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(1);
votation1.vote(2);

const votation2 = new Votation(`Qual usa cor favorita ?`);
votation2.addVotationOption({ option: `Vermelho`, numberOfVotes: 0 });
votation2.addVotationOption({ option: `Verde`, numberOfVotes: 0 });
votation2.addVotationOption({ option: `Azul`, numberOfVotes: 0 });
votation2.vote(2);
votation2.vote(0);
votation2.vote(1);
votation2.vote(2);

const votationApp = new VotationAPP();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotation();
