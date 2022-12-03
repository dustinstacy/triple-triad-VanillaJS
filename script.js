window.addEventListener("load", function () {
  setTimeout(function () {
    // Hide the address bar:
    window.scrollTo(0, 1);
  }, 0);
});
//--------------- Constants ------------//

const HAND_COUNT = 5;
const DECK_SIZE = 20;
const d = document;

//---------------Cards---------------//

const Cards = [
  {
    id: 01,
    name: "Red Abomination",
    image: "./images/card1.png",
    up: 1,
    right: 4,
    down: 7,
    left: 2,
  },
  {
    id: 02,
    name: "Alfadriel",
    image: "./images/card2.png",
    up: 7,
    right: "A",
    down: 8,
    left: 3,
  },
  {
    id: 03,
    name: "Ancient Automaton",
    image: "./images/card3.png",
    up: 3,
    right: 3,
    down: 2,
    left: 4,
  },
  {
    id: 04,
    name: "Ancient Priestess",
    image: "./images/card4.png",
    up: 5,
    right: 1,
    down: 2,
    left: 3,
  },
  {
    id: 05,
    name: "Astral Lich",
    image: "./images/card5.png",
    up: 2,
    right: 3,
    down: 1,
    left: 3,
  },
  {
    id: 06,
    name: "Big Fish",
    image: "./images/card6.png",
    up: 3,
    right: 2,
    down: 2,
    left: 3,
  },
  {
    id: 07,
    name: "Black Ant Queen",
    image: "./images/card7.png",
    up: 2,
    right: 2,
    down: 6,
    left: 4,
  },
  {
    id: 08,
    name: "Blood Feral",
    image: "./images/card8.png",
    up: 5,
    right: 7,
    down: 1,
    left: 6,
  },
  {
    id: 09,
    name: "Bonemask Shadow",
    image: "./images/card9.png",
    up: 6,
    right: 2,
    down: 2,
    left: 6,
  },
  {
    id: 10,
    name: "Rukkha",
    image: "./images/card10.png",
    up: 5,
    right: 3,
    down: 3,
    left: 9,
  },
  {
    id: 11,
    name: "Karkinos",
    image: "./images/card11.png",
    up: 3,
    right: 2,
    down: 4,
    left: 1,
  },
  {
    id: 12,
    name: "Daidarabotchi",
    image: "./images/card12.png",
    up: 4,
    right: 5,
    down: 4,
    left: 5,
  },
  {
    id: 13,
    name: "Dark Queen",
    image: "./images/card13.png",
    up: 6,
    right: 6,
    down: 6,
    left: 6,
  },
  {
    id: 14,
    name: "Excelsios",
    image: "./images/card14.png",
    up: 8,
    right: 5,
    down: 8,
    left: 1,
  },
  {
    id: 15,
    name: "Ilnoct",
    image: "./images/card15.png",
    up: 7,
    right: "A",
    down: 5,
    left: 7,
  },
  {
    id: 16,
    name: "Doppelganger Slime",
    image: "./images/card16.png",
    up: 5,
    right: 2,
    down: 1,
    left: 2,
  },
  {
    id: 17,
    name: "Dragon Emperor",
    image: "./images/card17.png",
    up: "A",
    right: 4,
    down: 8,
    left: 8,
  },
  {
    id: 18,
    name: "Huanglong",
    image: "./images/card18.png",
    up: 4,
    right: 8,
    down: 7,
    left: 2,
  },
  {
    id: 19,
    name: "Rafflesia",
    image: "./images/card19.png",
    up: 3,
    right: 5,
    down: 5,
    left: 2,
  },
  {
    id: 20,
    name: "Yggdrasil",
    image: "./images/card20.png",
    up: 1,
    right: 8,
    down: 2,
    left: 5,
  },
  {
    id: 21,
    name: "Gladius",
    image: "./images/card21.png",
    up: 3,
    right: 3,
    down: 5,
    left: 2,
  },
  {
    id: 22,
    name: "Palazo",
    image: "./images/card22.png",
    up: 3,
    right: 1,
    down: 6,
    left: 3,
  },
  {
    id: 23,
    name: "Valterra",
    image: "./images/card23.png",
    up: 2,
    right: 5,
    down: 4,
    left: 2,
  },
  {
    id: 24,
    name: "Garland",
    image: "./images/card24.png",
    up: 5,
    right: 2,
    down: 3,
    left: 3,
  },
  {
    id: 25,
    name: "Automaton A",
    image: "./images/card25.png",
    up: 4,
    right: 3,
    down: 3,
    left: 3,
  },
  {
    id: 26,
    name: "Automaton B",
    image: "./images/card26.png",
    up: 3,
    right: 4,
    down: 3,
    left: 3,
  },
  {
    id: 27,
    name: "Automaton C",
    image: "./images/card27.png",
    up: 6,
    right: 5,
    down: 2,
    left: 6,
  },
  {
    id: 28,
    name: "Blood Manipulation Feral",
    image: "./images/card28.png",
    up: 4,
    right: 7,
    down: 6,
    left: 6,
  },
  {
    id: 29,
    name: "Blood Manipulation Mage",
    image: "./images/card29.png",
    up: 2,
    right: 3,
    down: 4,
    left: 4,
  },
  {
    id: 30,
    name: "Blood Manipulation Slime",
    image: "./images/card30.png",
    up: 9,
    right: 2,
    down: 5,
    left: 7,
  },
  {
    id: 31,
    name: "Abomination Aqau",
    image: "./images/card31.png",
    up: 1,
    right: 5,
    down: 2,
    left: 5,
  },
  {
    id: 32,
    name: "Earth Dragon",
    image: "./images/card32.png",
    up: 5,
    right: 6,
    down: 4,
    left: 4,
  },
  {
    id: 33,
    name: "Eldritch God",
    image: "./images/card33.png",
    up: 3,
    right: 6,
    down: 6,
    left: 4,
  },
  {
    id: 34,
    name: "Kitsune",
    image: "./images/card34.png",
    up: 2,
    right: 4,
    down: 5,
    left: 8,
  },
  {
    id: 35,
    name: "Flynn",
    image: "./images/card35.png",
    up: 1,
    right: "A",
    down: "A",
    left: "A",
  },
  {
    id: 36,
    name: "Iris",
    image: "./images/card36.png",
    up: 2,
    right: 5,
    down: 4,
    left: 2,
  },
  {
    id: 37,
    name: "Poseidon",
    image: "./images/card37.png",
    up: 7,
    right: 6,
    down: 1,
    left: 5,
  },
  {
    id: 38,
    name: "Skoll",
    image: "./images/card38.png",
    up: 3,
    right: 6,
    down: 3,
    left: 1,
  },
  {
    id: 39,
    name: "Duessa",
    image: "./images/card39.png",
    up: 7,
    right: 7,
    down: 1,
    left: 8,
  },
  {
    id: 40,
    name: "Hades",
    image: "./images/card40.png",
    up: 4,
    right: 3,
    down: 8,
    left: 8,
  },
  {
    id: 41,
    name: "Hellhound",
    image: "./images/card41.png",
    up: 3,
    right: 3,
    down: 5,
    left: 2,
  },
  {
    id: 42,
    name: "Demeres",
    image: "./images/card42.png",
    up: 3,
    right: 4,
    down: 4,
    left: 2,
  },
  {
    id: 43,
    name: "Insect Queen",
    image: "./images/card43.png",
    up: 4,
    right: 2,
    down: 5,
    left: 2,
  },
  {
    id: 44,
    name: "Jubokko",
    image: "./images/card44.png",
    up: 7,
    right: 3,
    down: 2,
    left: 7,
  },
  {
    id: 45,
    name: "Khronos",
    image: "./images/card45.png",
    up: 4,
    right: 6,
    down: 7,
    left: 7,
  },
  {
    id: 46,
    name: "Remment",
    image: "./images/card46.png",
    up: 4,
    right: 5,
    down: 4,
    left: 6,
  },
  {
    id: 47,
    name: "Aphylia",
    image: "./images/card47.png",
    up: 8,
    right: 3,
    down: 5,
    left: 7,
  },
  {
    id: 48,
    name: "Mechasnake",
    image: "./images/card48.png",
    up: 4,
    right: 5,
    down: 2,
    left: 2,
  },
  {
    id: 49,
    name: "Dark Crow",
    image: "./images/card49.png",
    up: 7,
    right: 2,
    down: 1,
    left: 2,
  },
  {
    id: 50,
    name: "Mecha-Dragon Ladon",
    image: "./images/card50.png",
    up: 9,
    right: 1,
    down: 8,
    left: 5,
  },
  {
    id: 51,
    name: "Mecha-Scorpion",
    image: "./images/card51.png",
    up: 2,
    right: 4,
    down: 8,
    left: 5,
  },
  {
    id: 52,
    name: "Goldnharl",
    image: "./images/card52.png",
    up: 4,
    right: 3,
    down: 2,
    left: 4,
  },
  {
    id: 53,
    name: "Tellia",
    image: "./images/card53.png",
    up: 2,
    right: 5,
    down: 3,
    left: 3,
  },
  {
    id: 54,
    name: "Nuckelavee",
    image: "./images/card54.png",
    up: 3,
    right: 4,
    down: 3,
    left: 7,
  },
  {
    id: 55,
    name: "Parrot King",
    image: "./images/card55.png",
    up: 8,
    right: 1,
    down: 7,
    left: 2,
  },
  {
    id: 56,
    name: "Nihilo",
    image: "./images/card56.png",
    up: 6,
    right: 4,
    down: 5,
    left: 4,
  },
  {
    id: 57,
    name: "Urmica",
    image: "./images/card57.png",
    up: 5,
    right: "A",
    down: 3,
    left: 9,
  },
  {
    id: 58,
    name: "Xoer",
    image: "./images/card58.png",
    up: 7,
    right: 8,
    down: 7,
    left: 8,
  },
  {
    id: 59,
    name: "Son of Valhalla",
    image: "./images/card59.png",
    up: 4,
    right: 4,
    down: 4,
    left: 4,
  },
  {
    id: 60,
    name: "Tantalus",
    image: "./images/card60.png",
    up: 2,
    right: 8,
    down: 5,
    left: 4,
  },
  {
    id: 61,
    name: "Thanatos",
    image: "./images/card61.png",
    up: 6,
    right: 2,
    down: 8,
    left: 7,
  },
  {
    id: 62,
    name: "The Originator",
    image: "./images/card62.png",
    up: 9,
    right: 6,
    down: 9,
    left: 3,
  },
  {
    id: 63,
    name: "Dynamo",
    image: "./images/card63.png",
    up: 5,
    right: 5,
    down: 5,
    left: 5,
  },
  {
    id: 64,
    name: "Tiamat",
    image: "./images/card64.png",
    up: 6,
    right: 9,
    down: 1,
    left: 6,
  },
  {
    id: 65,
    name: "Dweller Worm",
    image: "./images/card65.png",
    up: 2,
    right: 2,
    down: 2,
    left: 2,
  },
  {
    id: 66,
    name: "Ptolemaios",
    image: "./images/card66.png",
    up: 3,
    right: 3,
    down: 3,
    left: 3,
  },
  {
    id: 67,
    name: "Clockwork Abomination",
    image: "./images/card67.png",
    up: 1,
    right: 5,
    down: 3,
    left: 3,
  },
  {
    id: 68,
    name: "Clockwork King",
    image: "./images/card68.png",
    up: 8,
    right: 3,
    down: 7,
    left: 5,
  },
  {
    id: 69,
    name: "Clockwork Queen",
    image: "./images/card69.png",
    up: 7,
    right: 2,
    down: 6,
    left: 4,
  },
  {
    id: 70,
    name: "Clockwork Skull",
    image: "./images/card70.png",
    up: 1,
    right: 3,
    down: 6,
    left: 9,
  },
];

//---------------Elements---------------//

const cellElem = d.querySelectorAll("[data-cell]");

//---------------Arrays---------------//
let blueDeck = [];
let redDeck = [];
let blueHand = [];
let redHand = [];

const hands = [];
hands["bh"] = blueHand;
hands["rh"] = redHand;

//---------------Variables---------------//

let isBlueTurn = true;

//--------------Init Functions--------------//

function startGame() {
  shuffleCards(Cards);
  createDecks(Cards, blueDeck, redDeck);
  deal(blueDeck, blueHand);
  deal(redDeck, redHand);
  randomFirstTurn();
  renderHands(hands);
  initEventListeners();
  d.querySelector(".table").style.display = "flex";
  d.querySelector(".start").style.display = "none";
  d.querySelector(".game-over").style.display = "none";
}

function shuffleCards(cards) {
  let i = cards.length,
    temp,
    rand;
  while (i !== 0) {
    rand = Math.floor(Math.random() * i);
    i--;
    temp = cards[i];
    cards[i] = cards[rand];
    cards[rand] = temp;
  }
  return cards;
}

function createDecks(cards, blueDeck, redDeck) {
  for (let card = 0; card < DECK_SIZE; card++) {
    // if even, move to blue deck
    if (card % 2 == 0) {
      blueDeck.push(cards[card]);
      // if odd, move to red deck
    } else if (card % 2 !== 0) {
      redDeck.push(cards[card]);
    }
  }
}

function deal(source, dest) {
  for (let card = 0; card < HAND_COUNT; card++) {
    dest.push(source[card]);
    source.shift();
  }
}

function randomFirstTurn() {
  if (Math.random() < 0.5) {
    isBlueTurn = true;
  } else {
    isBlueTurn = false;
  }
}

function renderHands(hands) {
  for (let hand in hands) {
    // set hand selector to id attribute
    let selector = `#${hand}`;
    // set hand variable to index of hands
    hand = hands[hand];
    for (let card in hand) {
      card = hand[card];
      let html = d.querySelector(".template").innerHTML;
      createCard(card, selector, html);
    }
  }
  // show current blue cards
  flipCards();
  return hands;
}

function createCard(card, selector, html, append) {
  // create empty container elements
  let element = d.createElement("li");
  let image = d.createElement("img");
  let up = d.createElement("span");
  let left = d.createElement("span");
  let right = d.createElement("span");
  let down = d.createElement("span");
  let name = card.name;
  // set inner HTML to blank template
  element.innerHTML = html;
  // add direction class to span elements
  up.classList.add("up");
  down.classList.add("down");
  right.classList.add("right");
  left.classList.add("left");
  // set element values based on object values
  image.src = card.image;
  up.innerText = card.up;
  left.innerText = card.left;
  right.innerText = card.right;
  down.innerText = card.down;
  // assign class & data to new list element
  element.className = "card";
  element.dataset.hand = selector;
  element.dataset.name = name;
  element.dataset.image = image;
  element.dataset.up = up;
  element.dataset.right = right;
  element.dataset.down = down;
  element.dataset.left = left;
  element.dataset.selected = "false";
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

function initEventListeners() {
  if (isBlueTurn == true) {
    bindClick("#bh .card");
    unbindClick("#rh .card");
  } else if (isBlueTurn !== true) {
    bindClick("#rh .card");
    unbindClick("#bh .card");
  }
  // init board event listeners
  checkForEmptyCells();
}

//--------------Update Functions----------------//

function bindClick(selectors) {
  let elements = d.querySelectorAll(selectors);
  for (let element in elements) {
    element = elements[element];
    if (element.nodeType) {
      element.addEventListener("click", select);
    }
  }
}

function unbindClick(selectors) {
  let elements = d.querySelectorAll(selectors);
  for (let element in elements) {
    element = elements[element];
    if (element.nodeType) {
      element.removeEventListener("click", select);
    }
  }
}

function endTurn() {
  checkForEmptyCells();
  switchTurns();
  flipCards();
  checkForWin();
}

function checkForEmptyCells() {
  cellsPlayed = 0;
  cellElem.forEach((cell) => {
    if (cell.dataset.played !== "true") {
      cell.addEventListener("click", placeCard);
    } else if (cell.dataset.played == "true") {
      cell.removeEventListener("click", placeCard);
      cellsPlayed++;
    }
  });
  return cellsPlayed;
}

function switchTurns() {
  if (isBlueTurn) {
    isBlueTurn = !isBlueTurn;
  } else if (!isBlueTurn) {
    isBlueTurn = true;
  }
}

function flipCards() {
  // get node list of all cards dealt or played
  let cards = d.querySelectorAll(".card");
  // turn node list into an array
  let cardsArray = Array.prototype.slice.call(cards);
  for (let card in cardsArray) {
    card = cardsArray[card];
    if (card.dataset.hand == "#bh" && isBlueTurn) {
      card.dataset.facedown = "false";
      card.dataset.owner = "blue";
      card.addEventListener("click", select);
    } else if (card.dataset.hand == "#rh" && !isBlueTurn) {
      card.dataset.facedown = "false";
      card.dataset.owner = "red";
      card.addEventListener("click", select);
    } else if (card.dataset.played == "true") {
      card.dataset.facedown = "false";
    } else {
      card.dataset.facedown = "true";
    }
  }
}

//---------------Gameplay Functions---------------//

function select(event) {
  // get card clicked
  let element = event.target;
  // check if same card
  if (element.dataset.selected === "true") {
    // unselect card and return click to playable cards
    element.dataset.selected = "false";
  } else {
    // select card and disable click to other playable cards
    element.dataset.selected = "true";
  }
}

function placeCard(event) {
  // get selected card and it's HTML data
  let source = d.querySelector('.card[data-selected="true"]');
  let sourceHTML = d.querySelector('.card[data-selected="true"]').innerHTML;
  // get board cell clicked
  let dest = event.target;
  // transfer card html to cell html
  dest.innerHTML = sourceHTML;
  dest.dataset.owner = source.dataset.owner;
  dest.dataset.flipped = "false";
  // add classes to played cell
  dest.className = "card";
  dest.dataset.played = "true";
  // remove played card from hand
  source.remove();
  processBattles(dest);
  endTurn();
}

function processBattles(dest) {
  // turn cell id number of target cell into integer
  let destCell = parseInt(dest.dataset.cell);
  // map placed cards html to grid location
  let placedCard = [...dest.children].map((cont) => cont.innerHTML);
  // remove img container from array
  placedCard.shift();
  // store starting ownership for repeat use in evaluations
  let owner = dest.dataset.owner;
  // set direction to a variable based on destination cell of placed card
  let up = destCell - 3;
  let left = destCell - 1;
  let right = destCell + 1;
  let down = destCell + 3;
  // turn all grid cells into an array for location purposes
  let cellArray = Array.prototype.slice.call(cellElem);
  for (let cell in cellArray) {
    cell = cellArray[cell];
    // touching cell variables. reassigned after each loop.
    let touchingCell = cell.dataset.cell;
    let text = cell.innerText;
    let touchingOwner = cell.dataset.owner;
    // check touching cells direction and if it is empty.
    if (touchingCell == up && text !== "" && touchingOwner !== owner) {
      let upCardValues = [...cellArray[up].innerText].filter(
        (item) => item !== "\n"
      );
      evaluateValues(placedCard[0], upCardValues[3], cell, owner);
    }
    if (
      touchingCell == left &&
      text !== "" &&
      destCell !== 3 &&
      destCell !== 6 &&
      touchingOwner !== owner
    ) {
      let leftCardValues = [...cellArray[left].innerText].filter(
        (item) => item !== "\n"
      );
      evaluateValues(placedCard[1], leftCardValues[2], cell, owner);
    }
    if (
      touchingCell == right &&
      text !== "" &&
      destCell !== 2 &&
      destCell !== 5 &&
      touchingOwner !== owner
    ) {
      let rightCardValues = [...cellArray[right].innerText].filter(
        (item) => item !== "\n"
      );
      evaluateValues(placedCard[2], rightCardValues[1], cell, owner);
    }
    if (touchingCell == down && text !== "" && touchingOwner !== owner) {
      let downCardValues = [...cellArray[down].innerText].filter(
        (item) => item !== "\n"
      );
      evaluateValues(placedCard[3], downCardValues[0], cell, owner);
    }
  }
}

function evaluateValues(cardA, cardB, cell, owner) {
  if (cardA > cardB) {
    cell.dataset.owner = owner;
    flip(cell);
  }
}

// // check for game winner
function checkForWin() {
  let blueCards = d.querySelectorAll('[data-owner="blue"]');
  let redCards = d.querySelectorAll('[data-owner="red"]');
  if (cellsPlayed == 9) {
    if (blueCards.length > redCards.length) {
      d.querySelector(".blue-win").style.display = "flex";
    } else if (blueCards.length < redCards.length) {
      d.querySelector(".red-win").style.display = "flex";
    } else if ((blueCards.length = redCards.length)) {
      d.querySelector(".draw").style.display = "flex";
    }
    d.querySelector(".game-over").style.display = "flex";
  }
}

function newGame() {
  reset();
  startGame();
}

function reset() {
  clearHandsAndDecks();
  clearBoard();
  d.querySelector(".blue-win").style.display = "none";
  d.querySelector(".red-win").style.display = "none";
  d.querySelector(".draw").style.display = "none";
}

function clearHandsAndDecks() {
  let lastCard = d.querySelector("li.card");
  lastCard.remove();
  blueDeck = [];
  redDeck = [];
  blueHand = [];
  redHand = [];
  hands["bh"] = blueHand;
  hands["rh"] = redHand;
}

function clearBoard() {
  cellElem.forEach((cell) => {
    cell.innerHTML = "";
    cell.removeAttribute("data-owner");
    cell.removeAttribute("data-played");
    cell.removeAttribute("data-facedown");
    cell.classList.remove("card");
    cell.classList.add("cell");
  });
}

function flip(cell) {
  if ((cell.dataset.flipped = "false")) {
    cell.dataset.flipped = "true";
  } else if ((cell.dataset.flipped = "true")) {
    cell.dataset.flipped = "false";
  }
}

function resetFlips() {
  let cellArray = Array.prototype.slice.call(cellElem);
  cellArray.forEach((cell) => {
    cell.dataset.flipped = "false";
  });
}
