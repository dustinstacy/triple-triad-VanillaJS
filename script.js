//---------------Cards---------------//
const Cards = [
  {
    "id": 01,
    "name": 'Crimson Creeper',
    "image": './images/card1.png',
    "up": 1,
    "right": 4,
    "down": 7,
    "left": 2,
  },
  {
    "id": 02,
    "name": 'Azriel',
    "image": './images/card2.png',
    "up": 7,
    "right": 'A',
    "down": 8,
    "left": 3,
  },
  {
    "id": 03,
    "name": 'Golem',
    "image": './images/card3.png',
    "up": 3,
    "right": 3,
    "down": 2,
    "left": 4,
  },
  {
    "id": 04,
    "name": 'Octopetra',
    "image": './images/card4.png',
    "up": 5,
    "right": 1,
    "down": 2,
    "left": 3,
  },
  {
    "id": 05,
    "name": 'Ether Spirit',
    "image": './images/card5.png',
    "up": 2,
    "right": 3,
    "down": 1,
    "left": 3,
  },
  {
    "id": 06,
    "name": 'Magicrap',
    "image": './images/card6.png',
    "up": 3,
    "right": 2,
    "down": 2,
    "left": 3,
  },
  {
    "id": 07,
    "name": 'Arachnotaur',
    "image": './images/card7.png',
    "up": 2,
    "right": 2,
    "down": 6,
    "left": 4,
  },
  {
    "id": 08,
    "name": 'Dire Werewolf',
    "image": './images/card8.png',
    "up": 5,
    "right": 7,
    "down": 1,
    "left": 6,
  },
  {
    "id": 09,
    "name": 'Shadow Beast',
    "image": './images/card9.png',
    "up": 6,
    "right": 2,
    "down": 2,
    "left": 6,
  },
  {
    "id": 10,
    "name": 'Terra Tortoise',
    "image": './images/card10.png',
    "up": 5,
    "right": 3,
    "down": 3,
    "left": 9,
  },
  {
    "id": 11,
    "name": 'Blueclaw',
    "image": './images/card11.png',
    "up": 3,
    "right": 2,
    "down": 4,
    "left": 1,
  },
  {
    "id": 12,
    "name": 'Ent',
    "image": './images/card12.png',
    "up": 4,
    "right": 5,
    "down": 4,
    "left": 5,
  },
  {
    "id": 13,
    "name": 'Blood Witch',
    "image": './images/card13.png',
    "up": 6,
    "right": 6,
    "down": 6,
    "left": 6,
  },
  {
    "id": 14,
    "name": 'Succubus',
    "image": './images/card14.png',
    "up": 8,
    "right": 5,
    "down": 8,
    "left": 1,
  },
  {
    "id": 15,
    "name": 'Diablos',
    "image": './images/card15.png',
    "up": 7,
    "right": 'A',
    "down": 5,
    "left": 7,
  },
  {
    "id": 16,
    "name": 'Sentry Bot',
    "image": './images/card16.png',
    "up": 5,
    "right": 2,
    "down": 1,
    "left": 2,
  },
  {
    "id": 17,
    "name": 'Tiamat',
    "image": './images/card17.png',
    "up": 'A',
    "right": 4,
    "down": 8,
    "left": 8,
  },
  {
    "id": 18,
    "name": 'Golden Serpent',
    "image": './images/card18.png',
    "up": 4,
    "right": 8,
    "down": 7,
    "left": 2,
  },
  {
    "id": 19,
    "name": 'Lily',
    "image": './images/card19.png',
    "up": 3,
    "right": 5,
    "down": 5,
    "left": 2,
  },
  {
    "id": 20,
    "name": 'False Druid',
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
let mainBoard = [];
let opponentClaimedBoard = [];
let playerClaimedBoard = [];

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
const d = document;
const handCount = 5;
const deckSize = 20;
let isPlayerTurn = true;

//---------------Elements---------------//
const cellElem = d.querySelectorAll('[data-cell]');

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
play();

//---------------Card & Pile Functions---------------//

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

// create decks
function createDecks(cards, playerDeck, opponentDeck) {
  for (let card = 0; card < deckSize; card++) {
    // if even, move to player deck
    if (card % 2 == 0) {
      playerDeck.push(cards[card]);
    // if odd, move to opponent deck
    } else if (card % 2 !== 0) {
        opponentDeck.push(cards[card]);
    }
  }
}

// deal decks
function deal(source, dest) {
  for (let card = 0; card < handCount; card++) {
    dest.push(source[card]);
    source.shift();
  }
}

// render table
function renderTable(table) {
  for (let pile in table) {
    let selector = `#${pile}`;
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
  // create empty container elements
  let element = d.createElement('li');
  let image = d.createElement('img');
  let up = d.createElement('span');
  let left = d.createElement('span');
  let right = d.createElement('span');
  let down = d.createElement('span');
  let name = card.name;
  // set inner HTML to blank template
  element.innerHTML = html;
  // add direction class to span elements
  up.classList.add('up');
  down.classList.add('down');
  right.classList.add('right');
  left.classList.add('left');
  // set element values based on object values
  image.src = card.image;
  up.innerText = card.up;
  left.innerText = card.left;
  right.innerText = card.right;
  down.innerText = card.down;
  // assign class & data to new list element
  element.className = 'card';
  element.dataset.pile = selector;
  element.dataset.name = name;
  element.dataset.image = image;
  element.dataset.up = up;
  element.dataset.right = right;
  element.dataset.down = down;
  element.dataset.left = left;
  element.dataset.selected = 'false';
  // get card location based on pile element
  let pile = d.querySelector(selector);
  // add card to pile location
  if (append) pile.appendChild(element);
  else pile.insertBefore(element, pile.firstChild);
  // add filled container elements to card
  element.appendChild(image);
  element.appendChild(up);
  element.appendChild(left);
  element.appendChild(right);
  element.appendChild(down);
}

// // flip cards
function flipCards() {
  // get node list of all cards on table
  let cards = d.querySelectorAll('.card');
  // turn node list into an array
  let cardsArray = Array.prototype.slice.call(cards);
  for (let card in cardsArray) {
    card = cardsArray[card];
    // cards in players hand & player's turn
    if (card.dataset.pile == '#ph' && isPlayerTurn) {
      card.dataset.facedown = 'false';
      card.dataset.owner = 'player';
      card.addEventListener('click', select);
      // cards in opponents hand & opponents turn
    } else if (card.dataset.pile == '#oh' && !isPlayerTurn) {
      card.dataset.facedown = 'false';
      card.dataset.owner = 'opp';
      card.addEventListener('click', select);
      // cards played to board
    } else if (card.dataset.played == 'true') {
      card.dataset.facedown = 'false';
      // face down cards
    } else {
      card.dataset.facedown = 'true';
    }
  }
}

//---------------Gameplay Functions---------------//

// start game
function play() {
  // make cards playable based on turn
  bindClick('#ph .card');
  if (isPlayerTurn == true) {
    bindClick('#ph .card');
  } else if (isPlayerTurn !== true) {
    unbindClick('#ph .card');
  }
  // check for playable board cells
  checkForEmptyCells();
}

// bind click events
function bindClick(selectors) {
  let elements = d.querySelectorAll(selectors);
  for (let element in elements) {
    element = elements[element];
    if (element.nodeType) {
      element.addEventListener('click', select);
    }
  }
}

// unbind click events
function unbindClick(selectors) {
    let elements = d.querySelectorAll(selectors);
  for (let element in elements) {
    element = elements[element];
    if (element.nodeType) {
      element.removeEventListener('click', select);
    }
  }
}

// // select card
function select(event) {
  // get card clicked
  let element = event.target;
  // check if same card
  if (element.dataset.selected === 'true') {
    // unselect card and return click to playable cards
    element.dataset.selected = 'false';
    bindClick('#ph .card')
  } else {
    // select card and disable click to other playable cards
    element.dataset.selected = 'true';
    unbindClick('.card[data-selected="false"]')
  }
}

// // move card
function placeCard(event) {
  // get selected card and it's HTML data
  let source = d.querySelector('.card[data-selected="true"]');
  let sourceHTML = d.querySelector('.card[data-selected="true"]').innerHTML;
  // get board cell clicked
  let dest = event.target;
  // transfer card html to cell html
  dest.innerHTML = sourceHTML;
  dest.dataset.owner = source.dataset.owner;
  // add classes to played cell
  dest.className = 'card';
  dest.dataset.played = 'true';
  // remove played card from hand
  source.remove();
  // switch turns after card is played
  flipCards();
  checkForEmptyCells();
}

function checkForEmptyCells() {
  cellElem.forEach(cell => {
    if (cell.dataset.played !== 'true') {
      cell.addEventListener('click', placeCard);
    } else if (cell.dataset.played == 'true') {
      cell.removeEventListener('click', placeCard);
    }
  });
  switchTurns();
}

function switchTurns() {
  if (isPlayerTurn) {
    isPlayerTurn = false;
  } else if (!isPlayerTurn) {
    isPlayerTurn = true;
  }
}

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
