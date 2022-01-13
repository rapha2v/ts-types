/*
  A tipagem estruturada no TS basicamente significa o tipo não importa muito, o mais importante são as restrições dele.
  Em resumo, se duas classes tem os mesmos métodos e atributos, tipo Casa e Abrigo (duas classes com atributos idênticos) o TS aceitaria um no lugar do outro.
*/
type Permission = 'master' | 'senior' | 'suporte' | 'estagiário';
type User = { user: string; password: string; permission: Permission };
type VerifyUserFn = (user: User, sentUser: User) => boolean;

let BDUser: { user: string; password: string; permission: Permission } = {
  user: 'Porto',
  password: '123',
  permission: 'master',
};
let userSent: { user: string; password: string; permission: Permission } = {
  user: 'Porto',
  password: '12',
  permission: 'senior',
};

const verifyUser: VerifyUserFn = (user, sentUser) => {
  if (
    user.user !== sentUser.user ||
    user.password !== sentUser.password ||
    user.permission !== sentUser.permission
  )
    return false;

  return true;
};

/*
  BDUser não é do tipo User, é apenas identico. O mesmo serve para o userSent
*/
//false
console.log(verifyUser(BDUser, userSent));

//true
BDUser = { user: 'Porto', password: '123', permission: 'master' };
userSent = { user: 'Porto', password: '123', permission: 'master' };
console.log(verifyUser(BDUser, userSent));
