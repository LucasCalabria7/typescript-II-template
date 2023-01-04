/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role; */
type Person = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: "normal" | "admin"
}

/*
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

type AdminAccount = {
  account: string,
  permission: boolean
}

type NormalAccount = {
  account: string,
  permission: boolean
}

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;*/

enum Role {
  ADMIN = "admin",
  NORMAL = "normal"
}

/*
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
*/

type NormalUser = Person & NormalAccount
type AdminlUser = Person & AdminAccount

/*
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
*/

type UnionType = NormalUser | AdminlUser

const globalAccounts: UnionType[] = []

/*
4. Crie duas pessoas, uma com permissão normal e a outra admin;
*/

const firstClient: NormalUser = {
  id: "d76a5sd",
  name: "Neymar",
  email: "neymar@gmail.com",
  password: "123456",
  role: Role.ADMIN,
  account: "Neyday",
  permission: true,
}

const anotherClient: NormalUser = {
  id: "g4d65g4df",
  name: "Tite",
  email: "tite@gmail.com",
  password: "654321",
  role: Role.NORMAL,
  account: "Fraco",
  permission: false,
}

/*
5. Guarde essas pessoas no array de usuários.
*/

globalAccounts.push(firstClient)
globalAccounts.push(anotherClient)

console.log(globalAccounts)

