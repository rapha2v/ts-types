/*
  Une tipos em um só
*/
type temNome = { nome: string };
type temSobrenome = { sobrenome: string };
type temIdade = { idade: number };
type Pessoa = temNome & temSobrenome & temIdade;

const pessoa: Pessoa = {
  nome: 'Jake',
  sobrenome: 'Peralta',
  idade: 33,
};

console.log(pessoa);
//module mode
export {};
