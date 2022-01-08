/*
  o tipo unknown é um tipo any mais seguro, pois o TS não deixar executar ações sem antes checar o tipo
*/
let x: unknown;
x = 150;

const y: number = 800;

//console.log(x + y); gera erro

if (typeof x === 'number') console.log(x + y);
