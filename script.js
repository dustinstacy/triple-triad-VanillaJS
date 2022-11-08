//---------------Cards---------------//
const Cards = [
  {
    "id": 01,
    "name": 'Raven',
    "image": '/images/.png',
    "up": 1,
    "right": 4,
    "down": 7,
    "left": 2,
  },
  {
    "id": 02,
    "name": 'Crow',
    "image": '/images/.png',
    "up": 7,
    "right": 'A',
    "down": 8,
    "left": 3,
  },
  {
    "id": 03,
    "name": 'Blackbird',
    "image": '/images/.png',
    "up": 3,
    "right": 3,
    "down": 2,
    "left": 4,
  },
  {
    "id": 04,
    "name": 'Hawk',
    "image": '/images/.png',
    "up": 5,
    "right": 1,
    "down": 2,
    "left": 3,
  },
  {
    "id": 05,
    "name": 'Pigeon',
    "image": '/images/.png',
    "up": 2,
    "right": 3,
    "down": 1,
    "left": 3,
  },
  {
    "id": 06,
    "name": 'Peacock',
    "image": '/images/.png',
    "up": 3,
    "right": 2,
    "down": 2,
    "left": 3,
  },
  {
    "id": 07,
    "name": 'Eagle',
    "image": '/images/.png',
    "up": 2,
    "right": 2,
    "down": 6,
    "left": 4,
  },
  {
    "id": 08,
    "name": 'Falcon',
    "image": '/images/.png',
    "up": 5,
    "right": 7,
    "down": 1,
    "left": 6,
  },
  {
    "id": 09,
    "name": 'Pelican',
    "image": '/images/.png',
    "up": 6,
    "right": 2,
    "down": 2,
    "left": 6,
  },
  {
    "id": 10,
    "name": 'Penguin',
    "image": '/images/.png',
    "up": 5,
    "right": 3,
    "down": 3,
    "left": 9,
  },
  {
    "id": 11,
    "name": 'Dragon',
    "image": '/images/.png',
    "up": 3,
    "right": 2,
    "down": 4,
    "left": 1,
  },
  {
    "id": 12,
    "name": 'Viper',
    "image": '/images/.png',
    "up": 4,
    "right": 5,
    "down": 4,
    "left": 5,
  },
  {
    "id": 13,
    "name": 'Cobra',
    "image": '/images/.png',
    "up": 6,
    "right": 6,
    "down": 6,
    "left": 6,
  },
  {
    "id": 14,
    "name": 'Boa',
    "image": '/images/.png',
    "up": 8,
    "right": 5,
    "down": 8,
    "left": 1,
  },
  {
    "id": 15,
    "name": 'Garter',
    "image": '/images/.png',
    "up": 7,
    "right": 10,
    "down": 5,
    "left": 7,
  },
  {
    "id": 16,
    "name": 'Asp',
    "image": '/images/.png',
    "up": 5,
    "right": 2,
    "down": 1,
    "left": 2,
  },
  {
    "id": 17,
    "name": 'Shovel-snout',
    "image": '/images/.png',
    "up": 10,
    "right": 4,
    "down": 8,
    "left": 8,
  },
  {
    "id": 18,
    "name": 'Split-jaw',
    "image": '/images/.png',
    "up": 4,
    "right": 8,
    "down": 7,
    "left": 2,
  },
  {
    "id": 19,
    "name": 'Mexican Burrowing',
    "image": '/images/.png',
    "up": 3,
    "right": 5,
    "down": 5,
    "left": 2,
  },
  {
    "id": 20,
    "name": 'False Coral',
    "image": '/images/.png',
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
let table = [];
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
renderTable(table);

// // 4. Render Table
// render(table);

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
    // console.log("Rendering Table...");
    // check for played cards
    // playedCards = checkForPlayedCards(playedCards);
    // check for empty piles
    // emptyPiles = checkForEmptyPiles(table);
    for (let pile in table) {
        let selector = `#${pile}`
        pile = table[`${pile}`];
        for (let card in pile) {
            card = pile[card];
            let html = d.querySelector('.template');
            createCard(card, selector, html);
        }
    }
    return table;
}

// create card in pile
function createCard(card, selector, html, append) {
  // store object values in variables
  let element = d.createElement('li');
  let image = d.createElement('img');
  image.src = card.image;
  let up = card.up;
  let right = card.right;
  let down = card.down;
  let left = card.left;
  let name = card.name;
  // assign html data to new list element
  element.className = 'card';
  if (selector == '#ph') {
    element.dataset.owner = 'player';
  } else if (selector == '#oh') {
    element.dataset.owner = 'opp';
  } else {
  element.dataset.facedown = 'true';
  }
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
  console.log(element);
  return;
}

    // // update stocks
    // update(table['ps'], '#player-stock ul', true);
    // update(table['os'], '#opp-stock ul', true);
    // // update wastes
    // update(table['pw'], '#player-waste ul');
    // update(table['ow'], '#opp-waste ul');
    // // update hands
    // let ph = table['ph'];
    // let oh = table['oh'];
    // // loop through hand piles
    // for (let i = 1; i <= 5; i++) {
    //     update(ph[i], '#player-hand li:nth-child(' + i + ') ul', true);
    //     update(oh[i], '#opp-hand li:nth-child(' + i + ') ul', true);
    // }
    // // update boards
    // let main = table['main'];
    // for (let i = 1; i <= 9; i++) {
    //     update(main[i], '#main li:nth-child('+i+') ul')
    // }
    // let pc = table['pc'];
    // let oc = table['oc'];
    // for (let i = 1; i <= pc.length; i++) {
    //     update(pc[i], '#player-claimed li:nth-child(' + i + ') ul');
    //     update(oc[i], '#opponent-claimed li:nth-child(' + i + ') ul');
    // }
//     return table;
// }


// // update piles
// function update(pile, selector, append) {
//     // console.log("Updating Table...");
//     // loop through cards in pile
//     for (let card in pile) {
//         card = pile[card];
//         // get html
//         let html = getTemplate(card);
//         // create card
//         createCard(card, selector, html, append)
//     }
//     // flip cards
//     // flipCards(playedCards, 'up')
//     return pile;
// }







// // check for played cards
// function checkForPlayedCards(playedCards) {
//     // console.log("Checking For Showing Cards...");
//     let elements = d.querySelectorAll('.card[data-player="true"]');
// }


// // // check for empty piles
// function checkForEmptyPiles(table) {
//     // console.log("Checking For Empty Piles...");
//     // reset empty data on all piles
//     let elements = d.querySelectorAll('.pile');
//     for (let element in elements) {
//         element = elements[element];
//         if (element.nodeType) {
//             delete element.dataset.empty;
//         }
//     }
//     // declare variable with fake pile
//     let emptyPiles = '#fake.pile';
//     // check stocks
//     if (table['ps'].length === 0) {
//         emptyPiles += ', .deck.player.pile';
//     }
//         if (table['os'].length === 0) {
//         emptyPiles += ', .deck.opponent.pile';
//     }
//     // check wastes
//     if (table['pw'].length === 0) {
//         emptyPiles += ', .waste.player.pile';
//     }
//         if (table['ow'].length === 0) {
//         emptyPiles += ', .waste.opponent.pile';
//     }
//     // check hands
//     let ph = table['ph'];
//     let oh = table['oh'];
//     // loop through hand piles
//     for (let i = 1; i < ph.length; i++) {
//         if (ph[i].length === 0) {
//             emptyPiles += ', #player-hand li:nth-child(' + i + ').pile';
//         }
//         if (oh[i].length === 0) {
//             emptyPiles += ', #opp-hand li:nth-child(' + i + ').pile';
//         }
//     }
//     // update boards
//     let main = table['main'];
//     for (let i = 1; i < main.length; i++) {
//         if (main[i].length === 0) {
//             emptyPiles += ', #main li:nth-child(' + i + ').pile';
//         }
//     }
//     let pc = table['pc'];
//     let oc = table['oc'];
//     for (let i = 1; i <= 4; i++) {
//         if (pc[i].length === 0) {
//                 emptyPiles += ', #player-claimed li:nth-child(' + i + ').pile';
//         }
//         if (oc[i].length === 0) {
//                 emptyPiles += ', #opponent-claimed li:nth-child(' + i + ').pile';
//         }
//     }
//     return;
//     // console.log(emptyPiles);
//     //mark pile as empty
//     elements = d.querySelectorAll(emptyPiles);
//     // console.log(elements);
//     for (let element in elements) {
//         element = elements[element];
//         if (element.nodeType) {
//             element.dataset.empty = "true";
//         }
//     }
//     return emptyPiles;
// }

// // flip cards
// function flipCards(selectors, direction) {
    // console.log("Flipping Cards...");
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
