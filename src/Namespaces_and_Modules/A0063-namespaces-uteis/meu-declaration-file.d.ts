// Tudo que tiver aqui dentro precisa ser criado de maneira global para o TS ter acesso

declare namespace _ {
  interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare namespace NodeJs {
  interface Global {
    MINHAGLOBAL: string;
  }
}
