/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.
  */

  enum Rainbow {
    RED = "RED",
    ORANGE = "ORANGE",
    YELLOW = "YELLOW",
    GREEN = "GREEN",
    LIGHTBLUE = "LIGHTBLUE",
    BLUE = "BLUE",
    VIOLET = "VIOLET",
  }

  type TUser = {
    name: string,
    age: number,
    favcolor: Rainbow,
  }

// 2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
// que todos os objetos tenham as mesmas propriedades.

  const firstUser : TUser = {
    name: "Maria",
    age: 20,
    favcolor: Rainbow.BLUE,
  }
  const secondUser : TUser = {
    name: "Jose",
    age: 25,
    favcolor: Rainbow.GREEN
  }
  const thirdUser : TUser = {
    name: "Lucas",
    age: 23,
    favcolor: Rainbow.ORANGE
  }

// 3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
// */

console.log(firstUser)
console.log(secondUser)
console.log(thirdUser)

