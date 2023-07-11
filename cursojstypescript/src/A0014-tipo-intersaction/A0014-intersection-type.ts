type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = "A" | "B";
type AC = "A" | "C";
type AD = "D" | "A";
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: "Rafael",
  sobrenome: "Santos",
  idade: 21,
};

console.log(pessoa);

export { pessoa };
