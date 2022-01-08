/*
  São arrays de tamanho imutável e tipos bem definidos
*/
const pessoa: [string, number] = ['raphael', 24];

pessoa[0] = 'daniel'; //pode ser alterado

/*
  podemos fazê-la ser imutável, sendo apenas para leitura
*/
const endereco: readonly [string, number] = ['rua florianópolis', 352];

//endereco[1] = 12; vai dar erro pois é apenas para leitura

console.log(pessoa);
console.log(endereco);

export {};
