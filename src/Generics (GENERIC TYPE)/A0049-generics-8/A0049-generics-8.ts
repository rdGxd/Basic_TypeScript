// Utility Types - Generics padrão no TypeScript

import { type } from 'os';

// Record -> Você fala qual é o tipo da chave do objeto e qual é o tipo do valor valor do objeto
const objeto1: Record<string, string | number> = {
  nome: `Rodrigo`,
  sobrenome: `Silva`,
  idade: 30,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required -> Torna tudo obrigatório
type PessoaRequired = Required<PessoaProtocol>;
// Partial -> Torna tudo opcional
type PessoaPartial = Partial<PessoaRequired>;
// Readonly -> Torna tudo Readonly
type PessoaReadOnly = Readonly<PessoaRequired>;
// Pick -> Escolha as coisas de dentro do objeto que você quer utilizar
type PessoaPick = Pick<PessoaRequired, `nome` | `sobrenome`>;

const objeto2: PessoaRequired = {
  nome: `Rodrigo`,
  sobrenome: `Silva`,
  idade: 30,
};
console.log(objeto2);

// Extract e Exclude

// Extract -> ele computa todos os tipos que estão em ABC e podem ser atribuídos aos tipos de CDE -> C
// Exclude -> ele computa todos os tipos que estão em ABC e nao estão em CDE -> A, B
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, `_id`>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: `asdjasdad8a90d890as8d9sa`,
  name: `Rodrigo`,
  age: 25,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(`API:`);
console.log(accountApi);

// Module mode
export default 1;
