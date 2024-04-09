// Manipulando a DOM

// Selecionando elementos

// getElementById

const card1 = document.getElementById('card-1');

console.log("getElementById - Card 1: ");
console.log(card1);

// getElementsByClassName

const cards = document.getElementsByClassName('card');

console.log("getElementsByClassName - Cards: ");
console.log(cards);

// getElementsByTagName

const divs = document.getElementsByTagName('div');

console.log("getElementsByTagName - Divs: ");
console.log(divs);

// querySelector

//id

const card2 = document.querySelector('#card-2');

console.log("querySelector (id) - Card 2: ");

console.log(card2);

//class

const card = document.querySelector('.card');

console.log("querySelector (first class) - Card: ");
console.log(card);

//all classes

const allCards = document.querySelectorAll('.card');

console.log("querySelectorAll - All Cards: ");

console.log(allCards);

//tag

const domImg = document.querySelector('#dom img');

console.log("querySelector usando hierarquia - DOM Image: ");

console.log(domImg);

