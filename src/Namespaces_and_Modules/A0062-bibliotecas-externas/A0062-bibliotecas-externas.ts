/*
Primeiro instale a biblioteca e depois a tipagem dela

1- npm i validator
2- npm i @types/validator -D
*/
import validator from 'validator';

console.log(validator.isEmail('rdg@gmail.com'));
