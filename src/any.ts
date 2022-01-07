/*
  caso eu não diga qual o tipo da minha variável/parâmetro ele vai assumir que é do tipo any, e o mesmo pode assumir qualquer valor, sendo perigoso pois ela não ter um tipo pode ocorrer inconsistência no código
*/
// function showMessage(msg) {
//   return msg;
// }
/*
  Posso támbem explicitar que eu quero que minha variável/parâmetro seja do tipo any
*/
function showMessage(msg: any) {
  return msg;
}

//any assumindo qualquer valor
console.log(showMessage(['a', 'b', 'c']));
console.log(showMessage('mensagem'));
console.log(showMessage(1));
