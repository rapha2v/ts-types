/*
  Basicamente cria um novo nome para tipos já existentes
*/
type Idade = number;
type Desenvolvedor = 'Full-Stack' | 'Front-End' | 'Back-End';
type Documento = 'CPF' | 'CNH' | 'RG';
type Pessoa = {
  nome: string;
  idade: Idade;
  desenvolvedor: Desenvolvedor;
  documento: Documento;
};

const pessoa: Pessoa = {
  nome: 'Raphael',
  idade: 24,
  desenvolvedor: 'Back-End',
  documento: 'CPF',
};

//module mode
export {};
