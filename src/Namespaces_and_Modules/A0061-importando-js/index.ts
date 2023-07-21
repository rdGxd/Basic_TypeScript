import { soma } from './module';

// Você pode fazer type casting para number ou migrar o arquivo original para TS
const result = soma(10, 20) as number;
console.log(result);
