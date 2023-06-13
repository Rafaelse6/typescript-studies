enum Cores {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.AZUL);
