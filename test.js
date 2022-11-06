const Cards = [
  {
    "id": 01,
    "name": 'Raven',
    "image": '/images/.png',
    "up": 5,
    "right": 6,
    "down": 2,
    "left": 7,
  },
  {
    "id": 02,
    "name": 'Crow',
    "image": '/images/.png',
    "up": 3,
    "right": 1,
    "down": 4,
    "left": 4,
  },
  {
    "id": 03,
    "name": 'Blackbird',
    "image": '/images/.png',
    "up": 2,
    "right": 3,
    "down": 2,
    "left": 3,
  },
  {
    "id": 04,
    "name": 'Hawk',
    "image": '/images/.png',
    "up": 8,
    "right": 7,
    "down": 1,
    "left": 5,
  },
  {
    "id": 05,
    "name": 'Pigeon',
    "image": '/images/.png',
    "up": 'A',
    "right": 'A',
    "down": 'A',
    "left": 'A',
  },
  {
    "id": 06,
    "name": 'Peacock',
    "image": '/images/.png',
    "up": 5,
    "right": 6,
    "down": 2,
    "left": 7,
  },
  {
    "id": 07,
    "name": 'Eagle',
    "image": '/images/.png',
    "up": 3,
    "right": 1,
    "down": 4,
    "left": 4,
  },
  {
    "id": 08,
    "name": 'Falcon',
    "image": '/images/.png',
    "up": 2,
    "right": 3,
    "down": 2,
    "left": 3,
  },
  {
    "id": 09,
    "name": 'Pelican',
    "image": '/images/.png',
    "up": 8,
    "right": 7,
    "down": 1,
    "left": 5,
  },
  {
    "id": 10,
    "name": 'Penguin',
    "image": '/images/.png',
    "up": 'A',
    "right": 'A',
    "down": 'A',
    "left": 'A',
  },
  {
    "id": 11,
    "name": 'Dragon',
    "image": '/images/.png',
    "up": 4,
    "right": 4,
    "down": 5,
    "left": 3,
  },
  {
    "id": 12,
    "name": 'Viper',
    "image": '/images/.png',
    "up": 7,
    "right": 5,
    "down": 6,
    "left": 2,
  },
  {
    "id": 13,
    "name": 'Cobra',
    "image": '/images/.png',
    "up": 6,
    "right": 2,
    "down": 8,
    "left": 3,
  },
  {
    "id": 14,
    "name": 'Boa',
    "image": '/images/.png',
    "up": 9,
    "right": 4,
    "down": 1,
    "left": 4,
  },
  {
    "id": 15,
    "name": 'Garter',
    "image": '/images/.png',
    "up": 1,
    "right": 1,
    "down": 1,
    "left": 1,
  },
  {
    "id": 16,
    "name": 'Asp',
    "image": '/images/.png',
    "up": 4,
    "right": 4,
    "down": 5,
    "left": 3,
  },
  {
    "id": 17,
    "name": 'Shovel-snout',
    "image": '/images/.png',
    "up": 7,
    "right": 5,
    "down": 6,
    "left": 2,
  },
  {
    "id": 18,
    "name": 'Split-jaw',
    "image": '/images/.png',
    "up": 6,
    "right": 2,
    "down": 8,
    "left": 3,
  },
  {
    "id": 19,
    "name": 'Mexican Burrowing',
    "image": '/images/.png',
    "up": 9,
    "right": 4,
    "down": 1,
    "left": 4,
  },
  {
    "id": 20,
    "name": 'False Coral',
    "image": '/images/.png',
    "up": 1,
    "right": 1,
    "down": 1,
    "left": 1,
  },
];

let playerDeck = [];
let opponentDeck = [];
let playerHand = [];
let opponentHand = [];

table = [];
table['pd'] = playerDeck;
table['ph'] = playerHand;
table['od'] = opponentDeck;
table['oh'] = opponentHand;

function shuffleCards(cards) {
    let i = cards.length, temp, rand;
    while (i !== 0) {
        rand = Math.floor(Math.random() * i);
        i--;
        temp = cards[i];
        cards[i] = cards[rand];
        cards[rand] = temp;
    }
    return cards;
}

function createDecks(cards, playerDeck, opponentDeck) {
    for (let card = 0; card < cards.length; card++) {
        if (card % 2 == 0) {
            playerDeck.push(cards[card]);
        } else if (card % 2 !== 0) {
            opponentDeck.push(cards[card]);
        }
    }
}

function deal(source, dest) {
    for (let card = 0; card < 5; card++) {
        dest.push(source[card]);
        source.shift();
    }
}

shuffleCards(Cards);
createDecks(Cards, playerDeck, opponentDeck);
deal(playerDeck, playerHand);
deal(opponentDeck, opponentHand);

console.log(table);