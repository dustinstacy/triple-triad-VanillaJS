//---------------Cards---------------//
const Cards = [
  {
    "id": 01,
    "name": 'Raven',
    "image": './images/card1.png',
    "up": 1,
    "right": 4,
    "down": 7,
    "left": 2,
  },
  {
    "id": 02,
    "name": 'Crow',
    "image": './images/card2.png',
    "up": 7,
    "right": 9,
    "down": 8,
    "left": 3,
  },
  {
    "id": 03,
    "name": 'Blackbird',
    "image": './images/card3.png',
    "up": 3,
    "right": 3,
    "down": 2,
    "left": 4,
  },
  {
    "id": 04,
    "name": 'Hawk',
    "image": './images/card4.png',
    "up": 5,
    "right": 1,
    "down": 2,
    "left": 3,
  },
  {
    "id": 05,
    "name": 'Pigeon',
    "image": './images/card5.png',
    "up": 2,
    "right": 3,
    "down": 1,
    "left": 3,
  },
  {
    "id": 06,
    "name": 'Peacock',
    "image": './images/card6.png',
    "up": 3,
    "right": 2,
    "down": 2,
    "left": 3,
  },
  {
    "id": 07,
    "name": 'Eagle',
    "image": './images/card7.png',
    "up": 2,
    "right": 2,
    "down": 6,
    "left": 4,
  },
  {
    "id": 08,
    "name": 'Falcon',
    "image": './images/card8.png',
    "up": 5,
    "right": 7,
    "down": 1,
    "left": 6,
  },
  {
    "id": 09,
    "name": 'Pelican',
    "image": './images/card9.png',
    "up": 6,
    "right": 2,
    "down": 2,
    "left": 6,
  },
  {
    "id": 10,
    "name": 'Penguin',
    "image": './images/card10.png',
    "up": 5,
    "right": 3,
    "down": 3,
    "left": 9,
  },
  {
    "id": 11,
    "name": 'Dragon',
    "image": './images/card11.png',
    "up": 3,
    "right": 2,
    "down": 4,
    "left": 1,
  },
  {
    "id": 12,
    "name": 'Viper',
    "image": './images/card12.png',
    "up": 4,
    "right": 5,
    "down": 4,
    "left": 5,
  },
  {
    "id": 13,
    "name": 'Cobra',
    "image": './images/card13.png',
    "up": 6,
    "right": 6,
    "down": 6,
    "left": 6,
  },
  {
    "id": 14,
    "name": 'Boa',
    "image": './images/card14.png',
    "up": 8,
    "right": 5,
    "down": 8,
    "left": 1,
  },
  {
    "id": 15,
    "name": 'Garter',
    "image": './images/card15.png',
    "up": 7,
    "right": 9,
    "down": 5,
    "left": 7,
  },
  {
    "id": 16,
    "name": 'Asp',
    "image": './images/card16.png',
    "up": 5,
    "right": 2,
    "down": 1,
    "left": 2,
  },
  {
    "id": 17,
    "name": 'Shovel-snout',
    "image": './images/card17.png',
    "up": 9,
    "right": 4,
    "down": 8,
    "left": 8,
  },
  {
    "id": 18,
    "name": 'Split-jaw',
    "image": './images/card18.png',
    "up": 4,
    "right": 8,
    "down": 7,
    "left": 2,
  },
  {
    "id": 19,
    "name": 'Mexican Burrowing',
    "image": './images/card19.png',
    "up": 3,
    "right": 5,
    "down": 5,
    "left": 2,
  },
  {
    "id": 20,
    "name": 'False Coral',
    "image": './images/card20.png',
    "up": 1,
    "right": 8,
    "down": 2,
    "left": 5,
  },
];

//---------------Arrays---------------//

// decks & wastes
let playerDeck = [];
let opponentDeck = [];
let playerWaste = [];
let opponentWaste = [];

// hands
let playerHand = [];
let opponentHand = [];

// Board elements
let mainBoard = []
let opponentClaimedBoard = []
let playerClaimedBoard = []

// build table
const table = [];
table['pd'] = playerDeck;
table['ph'] = playerHand;
table['pw'] = playerWaste;
table['pc'] = playerClaimedBoard;
table['od'] = opponentDeck;
table['oh'] = opponentHand;
table['ow'] = opponentWaste;
table['oc'] = opponentClaimedBoard;
table['main'] = mainBoard;

//---------------Variables---------------//

// declare variables
let d = document;
let isPlayerTurn = true;
let playedCards = true;

//---------------Elements---------------//

// table container
const tableElem = d.querySelector('.table');

// opponent containers
const opponentDeckElem = d.querySelector('opp-deck');
const opponentHandElem = d.querySelector('opp-hand');
const opponentWasteElem = d.querySelector('opp-waste');

// board containers
const opponentClaimedElem = d.querySelector('opp-claimed');
const mainElem = d.querySelector('.main');
const playerClaimedElem = d.querySelector('player.claimed');

// player containers
const playerWasteElem = d.querySelector('player-waste');
const playerHandElem = d.querySelector('player-hand');
const playerDeckElem = d.querySelector('player-deck');

// card pile element
const pileElem = d.querySelectorAll('.pile');

//--------------Functions--------------//

// 1. Shuffle all cards in database
shuffleCards(Cards);

// 2. Distribute to players decks
createDecks(Cards, playerDeck, opponentDeck);

// 3. Deal Deck
deal(playerDeck, playerHand);
deal(opponentDeck, opponentHand);

// // 4. Render Table
renderTable(table);

// 5. Start Game
// play(table);

//---------------Card & Pile Functions---------------//

// create deck
function createDecks(cards, playerDeck, opponentDeck) {
    for (let card = 0; card < cards.length; card++) {
        if (card % 2 == 0) {
            playerDeck.push(cards[card]);
        } else if (card % 2 !== 0) {
            opponentDeck.push(cards[card]);
        }
    }
}

// shuffle cards
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

// deal decks
function deal(source, dest) {
    for (let card = 0; card < 5; card++) {
        dest.push(source[card]);
        source.shift();
    }
}

// render table
function renderTable(table) {
    for (let pile in table) {
        let selector = `#${pile}`
        pile = table[`${pile}`];
        for (let card in pile) {
            card = pile[card];
            let html = d.querySelector('.template').innerHTML;
          createCard(card, selector, html);
      }
  }
  flipCards();
  return table;
}

// create card in pile
function createCard(card, selector, html, append) {
  // store object values in variables
  let element = d.createElement('li');
  let image = d.createElement('img');
  let up = d.createElement('span');
  up.classList.add('up');
  let down = d.createElement('span');
  down.classList.add('down');
  let right = d.createElement('span');
  right.classList.add('right');
  let left = d.createElement('span');
  left.classList.add('left');
  let name = card.name;
  // set html values based on object values
  image.src = card.image;
  up.innerText = card.up;
  right.innerText = card.right;
  down.innerText = card.down;
  left.innerText = card.left;
  // assign html data to new list element
  element.className = 'card';
  element.dataset.pile = selector;
  element.dataset.name = name;
  element.dataset.image = image;
  element.dataset.up = up;
  element.dataset.right = right;
  element.dataset.down = down;
  element.dataset.left = left;
  element.dataset.selected = 'false';
  element.innerHTML = html;
  // get pile element
  let pile = d.querySelector(selector);
  // add card to selector pile
  if (append) pile.appendChild(element);
  else pile.insertBefore(element, pile.firstChild);
  element.appendChild(image);
  element.appendChild(up);
  element.appendChild(left);
  element.appendChild(right);
  element.appendChild(down);
  // setCardValues();
  return;
}

// // flip cards
function flipCards(selector) {
  let cards = d.querySelectorAll('.card');
  let cardsArray = Array.prototype.slice.call(cards);
  for (let card in cardsArray) {
    card = cardsArray[card];
    if (card.dataset.pile == '#ph') {
      card.dataset.facedown = 'false';
      card.dataset.owner = 'player';
    } else {
      card.dataset.facedown = 'true';
    }
  }
}

// // check for played cards
// function checkForPlayedCards(playedCards) {
//     // console.log("Checking For Showing Cards...");
//     let elements = d.querySelectorAll('.card[data-player="true"]');
// }


//---------------Gameplay Functions---------------//

// start game
// function play(table) {
    // console.log("Starting Game...");
// }

// // bind click events
// function bindClick(selectors) {
    // console.log("Binding Clicks...");
// }

// // unbind click events
// function unbindClick(selectors) {
    // console.log("Unbinding Clicks...");
// }

// // click variable
// let clicks = 0;

// // select card
// function select(event) {
//     console.log("Card Selected");
// }

// // move card
// function move(source, dest, selectedCards = 1) {
//     while (selectedCards) {
//         // remove from the pile
//         let card = source[source.length - selectedCards, 1];
//         // push card to destination
//         dest.push(card);
//         // decrement
//         selectedCards--;
//     }
// }

// // validate move
// function validateMove(selected, dest) {
//     console.log("Validating Move...");
// }

// // make move
// function makeMove() {
//     console.log("Making Move...");
// }

// // parse "A" as integer
// function parseRankAsInt(rank) {
//     console.log("Parsing Rank...");
// }

// // evaluate competiting values
// function evaluateValues(selected, dest, playedCards) {
//     console.log("Evaluating Values...");
// }

// // check for winner
// function checkForWin(table) {
//     console.log("Checking For Winner...");
// }

// // winner card select
// function winnerCardSelect(event) {
//     console.log("Winner Card Selected");
// }

// // reset table per round
// function resetTableRound(table) {
//     console.log("Resetting For Next Round...");
// }

// // randomize winner keeper card
// function randomKeeper(table) {
//     console.log("Randomizing Keeper...");
// }

// // reset table per game
// function resetTableGame(table) {
//     console.log("Resetting For Next Game...");
// }
