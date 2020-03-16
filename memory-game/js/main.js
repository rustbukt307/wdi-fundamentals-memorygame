const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log(cardsInPlay);
if (cardsInPlay.length === 2) {
if (cardOne === cardTwo) {alert("You found a match!");}
if (cardOne !== cardTwo) {alert("Sorry, try again.");}
}