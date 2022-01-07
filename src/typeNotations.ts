'use strict';
//type annotations

/*
    Inferindo tipos básicos em uma variável
*/
let nome: string = 'Raphael'; //apenas strings
let idade: number = 24; //numeros
let adulto: boolean = true; // Apenas true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); //symbol
//let big: bigint = 10n; //numeros astronomicos

const pessoa: { nome: string; idade: number; sexo?: string } = {
  nome: 'Raphael',
  idade: 24,
  sexo: 'masculino',
};

/*
    tipos passados por referência
*/
let arrNumber: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrNumber2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrString: Array<string> = ['a', 'b', 'c', 'd', 'e'];
let arrString2: string[] = ['a', 'b', 'c', 'd', 'e'];

/*
    functions
*/
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;
