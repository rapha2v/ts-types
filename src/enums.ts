/*
  é uma estrutura de dados não ordenada que utilizamos geralmente para enumerar coisas para serem utilizadas depois na aplicação
*/
enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
  VERDE,
  MARROM,
  LARANJA,
  BRANCO,
  PRETO = '#000', //podemos tbm escolher o valor para cada enum criado
  //CINZA, porém ao fazermos isso, dependendo do vaor que colocarmos, o próprio TS não sabe como continuar atribuindo valores, então devemos colocar manualmente
}

/*
  a estrutura dele é como a de um objeto
*/
console.log(Cores.PRETO);

/*
  enums no TS são traiçoeiros pois se colocarmos um valor inexistente ele aceita, sem dar algum tipo de erro e retornar undefined
*/

//module mode
export {};
