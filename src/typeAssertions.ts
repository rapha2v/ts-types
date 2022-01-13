const body1 = document.querySelector('body');
//body.style.background = 'red'; vai dar erro pois o body ele possívelmente pode ser nulo
if (body1) body1.style.background = 'red'; //assim estamos checando se o body existe

const body2 = document.querySelector('body')!; //utilizar non-null tbm pode resolver, porém não é aconselhável pois pode gerar problemas posteriores
body2.style.background = 'black'; //não gera erro pois body, ali, só pode asusmir o tipo HTMLBodyElement

//Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement; // vc está falando para typescript que ele é exatamente desse tipo, no caso o tipo informado
body3.style.background = 'red';

/*
  Tendo três formas é só escolhar a que se adequa melhor a sua lógica, pois pode ser que em algum momento ele possa retornar um valor nulo, por exemplo documet.querySelector('div.class'), pode ser que não exista essa div onde vc está procurando
*/
