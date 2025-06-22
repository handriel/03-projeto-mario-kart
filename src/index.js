const player1 = {
  NOME: 'Mario',
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
}; 

const player2 = {
  NOME: 'Peach',
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};  

const player3 = {
  NOME: 'Yoshi',
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};  

const player4 = {
  NOME: 'Bowser',
  VELOCIDADE: 5,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
}; 

const player5 = {
  NOME: 'Luigi',
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};  

const player6 = {
  NOME: 'Donkey Kong',
  VELOCIDADE: 2,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
}; 

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`\n🔄 Rodada ${round}:\n`);
    }
}

(async function main() {
    console.log('Iniciando o jogo de Mario Kart...');
    console.log( `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} iniciando...\n`);
    await playRaceEngine(player1, player2);
})();
