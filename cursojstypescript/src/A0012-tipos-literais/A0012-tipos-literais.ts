let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; // eslint-disable-line

const pessoa = {
  nome: "Rafael" as const,
  sobrenome: "Santos",
};

function escolhaCor(cor: "Vermelho" | "Amarelo" | "Azul"): string {
  return cor;
}

console.log(escolhaCor("Vermelho"));

// Module mode
export default 1;
