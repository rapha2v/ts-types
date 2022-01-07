/*
  o tipo void indica que uma função não retorna nada
*/
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
semRetorno('Raphael', 'Porto');
