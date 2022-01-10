/*
  duas formas de se criar arrays
*/
const arr: Array<string> = ['a', 'b', 'c'];
const arr2: string[] = ['a', 'b', 'c'];

/*
  função com retorno de array
*/
function upper(arrString: string[]): string[] {
  return arrString.map((value) => value.toUpperCase());
}

const arrUpper = upper(arr);

console.log(arrUpper);

//module mode
export {};
