/*
  caso eu queira fazer um objeto livre, sem tipos nem chaves pré definidos
*/
let obj: Record<string, unknown>;

obj = {
  chaveA: 'chave A',
  chaveB: 'chave B',
};

/*
  objetos tipado
*/
let obj2: {
  chaveA: string;
  chaveB?: string; //opcional
  readonly chaveC: string; //apenas para leitura, não pode ser alterado
  [key: string]: unknown; //index signature, utiizando isso, o typescript perde a tipagem do obj
} = {
  chaveA: 'chave A',
  chaveC: 'chave C',
};

obj2.chavesss = 3;
obj2.chavess = 2;
obj2.chaves = 1;

console.log(obj2);
