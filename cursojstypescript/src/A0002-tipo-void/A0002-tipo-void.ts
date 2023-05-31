function semRetorno(...args: string[]): void {
  console.log(args.join(" "));
}

const pessoa = {
  nome: "Rafael",
  sobrenome: "Santos",

  exibirNome(): void {
    console.log(this.nome + " " + this.sobrenome);
  },
};

semRetorno("Rafael", "Santos");
pessoa.exibirNome();

export { pessoa };
