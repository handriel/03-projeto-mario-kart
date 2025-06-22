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

async function getRandomBlock() {
    let random = Math.random();
    let result

    switch (true) {
        case random < 0.33:
            result = 'RETA';
            break;
        case random < 0.66:
            result = 'CURVA';
            break;
        default:
            result = 'CONFRONTO';
    }

    return result;
}

async function logRollResult(characterName, roll, block, skillValue) {
    console.log(`   ${characterName} rolou 🎲${roll} no dado de ${block}: 🎲${roll} + 🔋${skillValue} = ${roll + skillValue}`);   
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`\n🔄 Rodada ${round}:`);
        let block = await getRandomBlock();
        console.log(`   Bloco: ${block}`);

        // roll the dice for each character
        let roll1 = await rollDice();
        let roll2 = await rollDice();

        // test skill checks
        let totalSkillCheck1 = 0;
        let totalSkillCheck2 = 0;

        if (block === 'RETA') {
            totalSkillCheck1 = player1.VELOCIDADE + roll1;
            totalSkillCheck2 = player2.VELOCIDADE + roll2;
            await logRollResult(player1.NOME, roll1, 'velocidade', player1.VELOCIDADE);
            await logRollResult(player2.NOME, roll2, 'velocidade', player2.VELOCIDADE);
        }
        if (block === 'CURVA') {
            totalSkillCheck1 = player1.MANOBRABILIDADE + roll1;
            totalSkillCheck2 = player2.MANOBRABILIDADE + roll2;
            await logRollResult(player1.NOME, roll1, 'manobrabilidade', player1.MANOBRABILIDADE);
            await logRollResult(player2.NOME, roll2, 'manobrabilidade', player2.MANOBRABILIDADE);
        }

        if (block === 'CONFRONTO') {
        }
    }
}

(async function main() {
    console.log('Iniciando o jogo de Mario Kart...');
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} iniciando...\n`);
    await playRaceEngine(player1, player2);
})();
