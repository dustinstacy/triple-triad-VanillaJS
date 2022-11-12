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

// decks
let blueDeck = [];
let redDeck = [];

// hands
let blueHand = [];
let redHand = [];

// build table
const hands = [];
hands['bh'] = blueHand;
hands['rh'] = redHand;

//---------------Variables---------------//

// declare variables
const d = document;
const handCount = 5;
const deckSize = 20;
let isBlueTurn = true;

//---------------Elements---------------//
const cellElem = d.querySelectorAll('[data-cell]');

//--------------Functions--------------//

// 1. Shuffle all cards in database
shuffleCards(Cards);

// 2. Distribute to decks
createDecks(Cards, blueDeck, redDeck);

// 3. Deal Deck
deal(blueDeck, blueHand);
deal(redDeck, redHand);

// 4. Random First Turn
randomFirstTurn();

// 5. Render hands
renderHands(hands);

// 6. Start Game
play();

//---------------Card & hand Functions---------------//

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
function createDecks(cards, blueDeck, redDeck) {
  for (let card = 0; card < deckSize; card++) {
    // if even, move to blue deck
    if (card % 2 == 0) {
      blueDeck.push(cards[card]);
    // if odd, move to red deck
    } else if (card % 2 !== 0) {
        redDeck.push(cards[card]);
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

// randomize first turn
function randomFirstTurn() {
  if (Math.random() < 0.5) {
    isBlueTurn = true;
  } else {
    isBlueTurn = false;
  }
}

// render hands
function renderHands(hands) {
  for (let hand in hands) {
    // set hand selector to id attribute
    let selector = `#${hand}`;
    // set hand variable to index of hands
    hand = hands[`${hand}`];
    for (let card in hand) {
      card = hand[card];
      let html = d.querySelector('.template').innerHTML;
      createCard(card, selector, html);
    }
  }
  // show current blue cards
  flipCards();
  return hands;
}

// create card in hand
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
  element.dataset.hand = selector;
  element.dataset.name = name;
  element.dataset.image = image;
  element.dataset.up = up;
  element.dataset.right = right;
  element.dataset.down = down;
  element.dataset.left = left;
  element.dataset.selected = 'false';
  // get card location based on hand element
  let hand = d.querySelector(selector);
  // add card to hand location
  if (append) hand.appendChild(element);
  else hand.insertBefore(element, hand.firstChild);
  // add filled container elements to card
  element.appendChild(image);
  element.appendChild(up);
  element.appendChild(left);
  element.appendChild(right);
  element.appendChild(down);
}

// // flip cards
function flipCards() {
  // get node list of all cards on hands
  let cards = d.querySelectorAll('.card');
  // turn node list into an array
  let cardsArray = Array.prototype.slice.call(cards);
  for (let card in cardsArray) {
    card = cardsArray[card];
    // cards in blue hand & blue's turn
    if (card.dataset.hand == '#bh' && isBlueTurn) {
      card.dataset.facedown = 'false';
      card.dataset.owner = 'blue';
      card.addEventListener('click', select);
      // cards in reds hand & reds turn
    } else if (card.dataset.hand == '#rh' && !isBlueTurn) {
      card.dataset.facedown = 'false';
      card.dataset.owner = 'red';
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

function play() {
  // make cards playable based on turn
  if (isBlueTurn == true) {
    bindClick('#bh .card');
    unbindClick('#rh .card');
  } else if (isBlueTurn !== true) {
    bindClick('#rh .card');
    unbindClick('#bh .card');
  }
  // check for playable board cells
  checkForEmptyCells();
}

function bindClick(selectors) {
  let elements = d.querySelectorAll(selectors);
  for (let element in elements) {
    element = elements[element];
    if (element.nodeType) {
      element.addEventListener('click', select);
    }
  }
}

function unbindClick(selectors) {
    let elements = d.querySelectorAll(selectors);
  for (let element in elements) {
    element = elements[element];
    if (element.nodeType) {
      element.removeEventListener('click', select);
    }
  }
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

// select card
function select(event) {
  // get card clicked
  let element = event.target;
  // check if same card
  if (element.dataset.selected === 'true') {
    // unselect card and return click to playable cards
    element.dataset.selected = 'false';
      if (isBlueTurn == true) {
        bindClick('#rh .card');
        unbindClick('#bh .card');
      } else if (isBlueTurn !== true) {
        bindClick('#bh .card');
        unbindClick('#rh .card');
  }
  } else {
    // select card and disable click to other playable cards
    element.dataset.selected = 'true';
    unbindClick('.card[data-selected="false"]')
  }
}

// place card
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
  evaluateBattles(dest);
  flipCards();
  checkForEmptyCells();
}

function switchTurns() {
  if (isBlueTurn) {
    isBlueTurn = false;
  } else if (!isBlueTurn) {
    isBlueTurn = true;
  }
}

// // evaluate competiting values
function evaluateBattles(dest) {
  // turn cell id number of target cell into integer
  let destCell = parseInt(dest.dataset.cell);
  // store starting ownership for repeat use in evaluations
  let owner = dest.dataset.owner;
  // turn all grid cells into an array for location purposes
  let cellArray = Array.prototype.slice.call(cellElem);
  // map placed cards html to grid location
  let placedCard = [...dest.children].map(cont => cont.innerHTML);
  // remove img from array
  placedCard.shift();
  // loop through cells in grid
  for (let cell in cellArray) {
    cell = cellArray[cell];
    // set value directions to variable based on destination cell for placed card
    // use destination cell with cellArray to determine competing cards location
    // !== '' checks for empty space to skip evaluation
    // cellArray index is adjusted by -1 in comparision to value directions since cellArray begins at 0, not 1;
    let up = (destCell - 3);
    let left = (destCell - 1);
    let right = (destCell + 1);
    let down = (destCell + 3);
    if (cell.dataset.cell == up && cell.innerText !== '') {
      let upCardValues = [...cellArray[(destCell - 4)].innerText].filter(item => item !== '\n');
      console.log('up battle', placedCard[0], 'vs.', upCardValues[3]);
      if (placedCard[0] > upCardValues[3]) {
        console.log('you win');
        cell.dataset.owner = owner ;
      } else if (placedCard[0] == upCardValues[3]) {
        console.log('draw');
      } else if (placedCard[0] < upCardValues[3]) {
        console.log('you lose');
        dest.dataset.owner  = cell.dataset.owner;
      }
    }
    if (cell.dataset.cell == left && cell.innerText !== '' && destCell !== 1 && destCell !== 4 && destCell !== 7) {
      let leftCardValues = [...cellArray[(destCell - 2)].innerText].filter(item => item !== '\n');
      console.log('left battle', placedCard[1], 'vs.', leftCardValues[2]);
      if (placedCard[1] > leftCardValues[2]) {
        console.log('you win');
        cell.dataset.owner = owner ;
      } else if (placedCard[1] == leftCardValues[2]) {
        console.log('draw');
      } else if (placedCard[1] < leftCardValues[2]) {
        console.log('you lose');
        dest.dataset.owner  = cell.dataset.owner;
        console.log(owner)
      }
    }
    if (cell.dataset.cell == right && cell.innerText !== '' && destCell !== 3 && destCell !== 6 && destCell !== 9) {
      let rightCardValues = [...cellArray[destCell].innerText].filter(item => item !== '\n');
      console.log('right battle', placedCard[2], 'vs.', rightCardValues[1]);
      if (placedCard[2] > rightCardValues[1]) {
        console.log('you win');
        cell.dataset.owner = owner ;
      } else if (placedCard[2] == rightCardValues[1]) {
        console.log('draw');
      } else if (placedCard[2] < rightCardValues[1]) {
        console.log('you lose');
        dest.dataset.owner  = cell.dataset.owner;
        console.log(owner)
      }
    }
    if (cell.dataset.cell == down && cell.innerText !== '') {
      let downCardValues = [...cellArray[(destCell + 2)].innerText].filter(item => item !== '\n');
      console.log('down battle', placedCard[3], 'vs.', downCardValues[0]);
      if (placedCard[3] > downCardValues[0]) {
        console.log('you win');
        cell.dataset.owner = owner;
      } else if (placedCard[3] == downCardValues[0]) {
        console.log('draw');
      } else if (placedCard[3] < downCardValues[0]) {
        console.log('you lose');
        dest.dataset.owner  = cell.dataset.owner;
      }
    }
  }
}

// // check for game winner
// function checkForWin() {
// }


// start game
// function startGame() {
// }

// // new game
// function newGame() {
// }