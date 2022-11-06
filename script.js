//---------------Decks---------------//

const PlayerDeck = [
    {
        "id": 01,
        "name": 'Raven',
        "owner": '#player',
        "image": '/images/.png',
        "up": 5,
        "right": 6,
        "down": 2,
        "left": 7,
    },
    {
        "id": 02,
        "name": 'Crow',
        "owner": '#player',
        "image": '/images/.png',
        "up": 3,
        "right": 1,
        "down": 4,
        "left": 4,
    },
    {
        "id": 03,
        "name": 'Blackbird',
        "owner": '#player',
        "image": '/images/.png',
        "up": 2,
        "right": 3,
        "down": 2,
        "left": 3,
    },
    {
        "id": 04,
        "name": 'Hawk',
        "owner": '#player',
        "image": '/images/.png',
        "up": 8,
        "right": 7,
        "down": 1,
        "left": 5,
    },
    {
        "id": 05,
        "name": 'Pigeon',
        "owner": '#player',
        "image": '/images/.png',
        "up": 'A',
        "right": 'A',
        "down": 'A',
        "left": 'A',
    },
    {
        "id": 06,
        "name": 'Peacock',
        "owner": '#player',
        "image": '/images/.png',
        "up": 5,
        "right": 6,
        "down": 2,
        "left": 7,
    },
    {
        "id": 07,
        "name": 'Eagle',
        "owner": '#player',
        "image": '/images/.png',
        "up": 3,
        "right": 1,
        "down": 4,
        "left": 4,
    },
    {
        "id": 08,
        "name": 'Falcon',
        "owner": '#player',
        "image": '/images/.png',
        "up": 2,
        "right": 3,
        "down": 2,
        "left": 3,
    },
    {
        "id": 09,
        "name": 'Pelican',
        "owner": '#player',
        "image": '/images/.png',
        "up": 8,
        "right": 7,
        "down": 1,
        "left": 5,
    },
    {
        "id": 10,
        "name": 'Penguin',
        "owner": '#player',
        "image": '/images/.png',
        "up": 'A',
        "right": 'A',
        "down": 'A',
        "left": 'A',
    },
];

const OpponentDeck = [
    {
        "id": 11,
        "name": 'Dragon',
        "owner": '#opponent',
        "image": '/images/.png',
        "up": 4,
        "right": 4,
        "down": 5,
        "left": 3,
    },
    {
        "id": 12,
        "name": 'Viper',
        "owner": '#opponent',
        "image": '/images/.png',
        "up": 7,
        "right": 5,
        "down": 6,
        "left": 2,
    },
    {
        "id": 13,
        "name": 'Cobra',
        "owner": '#opponent',
        "image": '/images/.png',
        "up": 6,
        "right": 2,
        "down": 8,
        "left": 3,
    },
    {
        "id": 14,
        "name": 'Boa',
        "owner": '#opponent',
        "image": '/images/.png',
        "up": 9,
        "right": 4,
        "down": 1,
        "left": 4,
    },
    {
        "id": 15,
        "name": 'Garter',
        "owner": '#opponent',
        "image": '/images/.png',
        "up": 1,
        "right": 1,
        "down": 1,
        "left": 1,
    },
    {
        "id": 16,
        "name": 'Asp',
        "owner": '#opponent',
        "image": '/images/.png',
        "up": 4,
        "right": 4,
        "down": 5,
        "left": 3,
    },
    {
        "id": 17,
        "name": 'Shovel-snout',
        "owner": '#opponent',
        "image": '/images/.png',
        "up": 7,
        "right": 5,
        "down": 6,
        "left": 2,
    },
    {
        "id": 18,
        "name": 'Split-jaw',
        "owner": '#opponent',
        "image": '/images/.png',
        "up": 6,
        "right": 2,
        "down": 8,
        "left": 3,
    },
    {
        "id": 19,
        "name": 'Mexican Burrowing',
        "owner": '#opponent',
        "image": '/images/.png',
        "up": 9,
        "right": 4,
        "down": 1,
        "left": 4,
    },
    {
        "id": 20,
        "name": 'False Coral',
        "owner": '#opponent',
        "image": '/images/.png',
        "up": 1,
        "right": 1,
        "down": 1,
        "left": 1,
    },
];



//---------------Arrays---------------//

// initiate empty arrays

// decks
let playerDeck = [];
let opponentDeck = [];

// Stock & Waste
let playerStock = [];
let playerWaste = [];
let opponentStock = [];
let opponentWaste = [];

// build hands
let playerHand = [];
playerHand[1] = playerHand[2] = playerHand[3] = playerHand[4] = playerHand[5] = [];

let opponentHand = [];
opponentHand[1] = opponentHand[2] = opponentHand[3] = opponentHand[4] = opponentHand[5] = [];

// build main board
let mainBoard = []
mainBoard[1] = mainBoard[2] = mainBoard[3] = mainBoard[4] = mainBoard[5] =
    mainBoard[6] = mainBoard[7] = mainBoard[8] = mainBoard[9] = [];

// build claimed boards
let opponentClaimedBoard = []
opponentClaimedBoard[1] = opponentClaimedBoard[2] = opponentClaimedBoard[3] = opponentClaimedBoard[4] = [];

let playerClaimedBoard = []
playerClaimedBoard[1] = playerClaimedBoard[2] = playerClaimedBoard[3] = playerClaimedBoard[4] = [];

// build table
let table = [];
table['ps'] = playerStock;
table['ph'] = playerHand;
table['pw'] = playerWaste;
table['pc'] = playerClaimedBoard;
table['os'] = opponentStock;
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
const opponentBarElem = d.querySelector('opp-bar')
const opponentStockElem = d.querySelector('opp-stock');
const opponentHandElem = d.querySelector('opp-hand');
const opponentWasteElem = d.querySelector('opp-waste');

// board containers
const boardElem = d.querySelector('.board');
const opponentClaimedElem = d.querySelector('opp-claimed');
const mainElem = d.querySelector('.main');
const playerClaimedElem = d.querySelector('player.claimed');


// player containers
const playerBarElem = d.querySelector('player-bar')
const playerWasteElem = d.querySelector('player-waste');
const playerHandElem = d.querySelector('player-hand');
const playerStockElem = d.querySelector('player-stock');

// card pile element
const pileElem = d.querySelectorAll('.pile');



//--------------Functions--------------//

//--------------Call Init Functions---------------//

// 1. Create Deck
playerDeck = create(PlayerDeck);
opponentDeck = create(OpponentDeck);

// 2.Shuffle Deck
playerDeck = shuffle(playerDeck);
opponentDeck = shuffle(opponentDeck);

// 3. Deal Deck
deal(playerDeck, table)
deal(opponentDeck, table)
console.log(table);

// 4. Render Table
render(table);

// 5. Start Game
// play(table);



//---------------Card & Pile Functions---------------//

// create deck
function create(deck) {
    console.log('Creating Deck...');
    for (let card in deck) {
        card = deck[card];
        deck.push(card);
    }
    return deck;
}

// shuffle deck
function shuffle(deck) {
    // console.log("Shuffling Decks...");
    let i = deck.length, temp, rand;
    while (i !== 0) {
        rand = Math.floor(Math.random() * i);
        i--;
        temp = deck[i];
        deck[i] = deck[rand];
        deck[rand] = temp;
    }
    return deck;
}


// deal deck
function deal(deck, table) {
    // console.log("Dealing Hands...");
    if (deck == PlayerDeck) {
        table['ps'] = deck;
        let ph = table['ph'];
        for (let i = 1; i <= 5; i++) {
            move(table['ps'][0], ph[i], playerDeck, false);
        }
    }
    if (deck == OpponentDeck) {
        table['os'] = deck;
        let oh = table['oh'];
        for (let i = 1; i <= 5; i++) {
                move(table['os'][0], oh[i], opponentDeck, false);
        }

    }
    return table;
}


// move card
function move(source, dest, parent, manual, selectedCards = 1) {
    if (manual !== true) {
        let card = source;
        dest.push(card); // push card to destination
        parent.shift();
    } else {
        while (selectedCards) {
            // remove from the pile
            let card = source[source.length - selectedCards, 1];
            // push card to destination
            dest.push(card);
            // decrement
            selectedCards--;
        }
    }
}


// render table
function render(table) {
    // console.log("Rendering Table...");

    // check for played cards
    // playedCards = checkForPlayedCards(playedCards);

    // check for empty piles
    emptyPiles = checkForEmptyPiles(table);
    // update stocks
    update(table['ps'], '#player-stock ul', true);
    update(table['os'], '#opp-stock ul', true);
    // update wastes
    update(table['pw'], '#player-waste ul');
    update(table['ow'], '#opp-waste ul');
    // update hands
    let ph = table['ph'];
    let oh = table['oh'];
    // loop through hand piles
    for (let i = 1; i <= 5; i++) {
        update(ph[i], '#player-hand li:nth-child(' + i + ') ul', true);
        update(oh[i], '#opp-hand li:nth-child(' + i + ') ul', true);
    }
    // update boards
    let main = table['main'];
    for (let i = 1; i <= 9; i++) {
        update(main[i], '#main li:nth-child('+i+') ul')
    }
    let pc = table['pc'];
    let oc = table['oc'];
    for (let i = 1; i <= pc.length; i++) {
        update(pc[i], '#player-claimed li:nth-child(' + i + ') ul');
        update(oc[i], '#opponent-claimed li:nth-child(' + i + ') ul');
    }
    return;
}


// update piles
function update(pile, selector, append) {
    // console.log("Updating Table...");
    // loop through cards in pile
    for (let card in pile) {
        card = pile[card];
        // get html
        let html = getTemplate(card);
        // create card
        createCard(card, selector, html, append)
    }
    // flip cards
    // flipCards(playedCards, 'up')
    return pile;
}

// html template
function getTemplate(card) {
    let html = d.querySelector('.template');
    return html;
}


// create card in pile
function createCard(card, selector, html, append) {
    console.log("Creating Card...");
    // store object values in variables
    let owner = card.owner;
    let up = card.up;
    let right = card.right;
    let down = card.down;
    let left = card.left;
    let image = card.image;
    let name = card.name;
    // get pile based on selector
    if ( selector.includes('#player-stock') ) var p = 'ps';
    if ( selector.includes('#player-hand') ) var p = 'ph';
    if ( selector.includes('#player-waste') ) var p = 'pw';
    if ( selector.includes('#player-claimed')) var p = 'pc';
    if ( selector.includes('#opp-stock') ) var p = 'os';
    if ( selector.includes('#opp-hand') ) var p = 'oh';
    if ( selector.includes('#opp-waste') ) var p = 'ow';
    if ( selector.includes('#opp-claimed') ) var p = 'oc';
    if ( selector.includes('#main')) var p = 'main';
    // create new empty list element
    let element = d.createElement('li')
    // assign html data to new list element
    element.className = 'card';
    element.dataset.owner = owner;
    element.dataset.up = up;
    element.dataset.right = right;
    element.dataset.down = down;
    element.dataset.left = left;
    element.dataset.image = image;
    element.dataset.name = name;
    element.dataset.pile = p;
    element.dataset.selected = 'false';
    element.innerHTML = html;
    // store selector pile in a variable
    let pile = d.querySelector(selector);
    // add card to selector pile
    if (append) pile.appendChild(element);
    else pile.insertBefore(element, pile.firstChild);
    return;
}


// check for played cards
function checkForPlayedCards(playedCards) {
    // console.log("Checking For Showing Cards...");
    let elements = d.querySelectorAll('.card[data-player="true"]');
}


// // check for empty piles
function checkForEmptyPiles(table) {
    // console.log("Checking For Empty Piles...");
    // reset empty data on all piles
    let elements = d.querySelectorAll('.pile');
    for (let element in elements) {
        element = elements[element];
        if (element.nodeType) {
            delete element.dataset.empty;
        }
    }
    // declare variable with fake pile
    let emptyPiles = '#fake.pile';
    // check stocks
    if (table['ps'].length === 0) {
        emptyPiles += ', .deck.player.pile';
    }
        if (table['os'].length === 0) {
        emptyPiles += ', .deck.opponent.pile';
    }
    // check wastes
    if (table['pw'].length === 0) {
        emptyPiles += ', .waste.player.pile';
    }
        if (table['ow'].length === 0) {
        emptyPiles += ', .waste.opponent.pile';
    }
    // check hands
    let ph = table['ph'];
    let oh = table['oh'];
    // loop through hand piles
    for (let i = 1; i < ph.length; i++) {
        if (ph[i].length === 0) {
            emptyPiles += ', #player-hand li:nth-child(' + i + ').pile';
        }
        if (oh[i].length === 0) {
            emptyPiles += ', #opp-hand li:nth-child(' + i + ').pile';
        }
    }
    // update boards
    let main = table['main'];
    for (let i = 1; i < main.length; i++) {
        if (main[i].length === 0) {
            emptyPiles += ', #main li:nth-child(' + i + ').pile';
        }
    }
    let pc = table['pc'];
    let oc = table['oc'];
    for (let i = 1; i <= 4; i++) {
        if (pc[i].length === 0) {
                emptyPiles += ', #player-claimed li:nth-child(' + i + ').pile';
        }
        if (oc[i].length === 0) {
                emptyPiles += ', #opponent-claimed li:nth-child(' + i + ').pile';
        }
    }
    return;
    // console.log(emptyPiles);
    //mark pile as empty
    elements = d.querySelectorAll(emptyPiles);
    // console.log(elements);
    for (let element in elements) {
        element = elements[element];
        if (element.nodeType) {
            element.dataset.empty = "true";
        }
    }
    return emptyPiles;
}

// // flip cards
// function flipCards(selectors, direction) {
    // console.log("Flipping Cards...");
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
