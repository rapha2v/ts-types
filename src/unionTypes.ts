/*
  union types é utilziado para falar que determinada coisa (função, métodos, variáveis, parâmetro e etc) pode assumir mais de um tipo de retorno ou valor
*/
function addOrConcat(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number') return x + y;
  if (typeof x === 'string' && typeof y === 'string') return x + ' ' + y;
  return 'Tipos inválidos';
}

console.log(addOrConcat(1, 1));
console.log(addOrConcat('Jake', 'Peralta'));

let x: string | number = 'Jake';
x = 1;
console.log(x);

//module mode
export {};
