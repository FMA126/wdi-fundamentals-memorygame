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
let score = 0;

const checkForMatch = function(x, elem) {
    elem.setAttribute('src', cards[x].cardImage)
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            score++;
            document.getElementById('outcome-score').getElementsByTagName('p')[1].innerHTML = ("Your Score: " + score);
            document.getElementById('outcome-score').getElementsByTagName('p')[0].innerHTML = ("You found a match!");
        } else {
            document.getElementById('outcome-score').getElementsByTagName('p')[0].innerHTML = ("Sorry try again");
            
        }
    }
    
}
const flipCard = function() {
    let cardId = this.getAttribute('data-id');
    let el = this;
    
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch(cardId, el);
}

const newGame = function() {
    cardsInPlay = [];
    document.getElementById('game-board').innerHTML = '';
    document.getElementById('outcome-score').getElementsByTagName('p')[0].innerHTML = "You can do it!";


    
    createBoard();
}

const createBoard = function() {    
    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement('img');

        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }

    let resetCards = document.createElement('button');

    resetCards.innerHTML = 'Try Again';
    resetCards.addEventListener('click', newGame);
    document.getElementById('game-board').appendChild(resetCards);

}

createBoard();
