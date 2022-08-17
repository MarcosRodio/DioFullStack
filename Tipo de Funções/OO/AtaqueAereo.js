let N = parseInt(gets());

let jogador1, jogador2;

for (let i = 0; i < N; i++) {

  jogador1 = gets();

  jogador2 = gets();

  

//TODO: Complete os espaços em branco com uma possível solução para o desafio

  

  if (jogador1.toUpperCase() === "ATAQUE") {

   if (jogador2.toUpperCase() === "ATAQUE") {

    print("Aniquilacao mutua");

   }

   else {

    print("Jogador 1 venceu");

   }

  }

  else if (jogador1.toUpperCase() === "PEDRA") {

   if (jogador2.toUpperCase() === "PEDRA") {

    print("Sem ganhador");

   }

   else if (jogador2.toUpperCase() === "PAPEL") {

    print("Jogador 1 venceu");

   }

   else {

    print("Jogador 2 venceu");

   }

  }

  else if (jogador1.toUpperCase() === "PAPEL") {

   if (jogador2.toUpperCase() === "PAPEL") {

    print("Ambos venceram");

   }

   else {

    print("Jogador 2 venceu");

   }

  }

}