const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

let cardsInPlay = [];
let cardElements = [];
let score = 0;

function checkForMatch(element) {
  element.setAttribute('src', cards[element.getAttribute('data-id')].cardImage);
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
      score++;
      document.getElementById('score').textContent = score;
    } else {
      alert("Sorry, try again.");
    }
  }
};
function flipCard() {
  let id = this.getAttribute('data-id');
  console.log("User flipped " + cards[id].rank);
  cardsInPlay.push(cards[id].rank);
  console.log(cards[id].cardImage);
  console.log(cards[id].suit);
  checkForMatch(this);
};
function createBoard() {
  for (let i=0; i<cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  };
};
createBoard();

function reset() {
  for (let i=0; i<cards.length; i++){
    document.getElementById('game-board').children[i].setAttribute('src', 'images/back.png');
    cardsInPlay = [];
  }
};

document.getElementsByTagName('button')[0].addEventListener('click', reset);