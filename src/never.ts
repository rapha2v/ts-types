/*
  indica que a função ou método jamais vai retornar algo
*/
function createError(): never {
  throw new Error('algum erro');
}

createError();
