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

// Propriedades dos objetos 

//Cada um dos objetos da dom tem propriedades e métodos diferentes que podem ser acessados e manipulados
// através do ponto (.) após o objeto selecionado

//textContent

const cardI = document.querySelector('#card-1');

cardI.textContent = "Texto alterado com textContent";

//innerHTML

const cardIII = document.querySelector('#card-3');

cardIII.innerHTML = "<button class='border-2 border-black'> Botão criado com innerHTML </button>";

//style

const cardIV = document.querySelector('#card-4');

cardIV.style.backgroundColor = "blue";

//classList

const cardII = document.querySelector('#card-2');
cardII.classList.add('border-2', 'border-black');


//getAttribute

const startButton = document.querySelector('#start-button a');

console.log("getAttribute - Start Button: ");
console.log(startButton.getAttribute('href'));

//setAttribute
console.log("setAttribute - Start Button: ");
startButton.setAttribute('href', 'https://www.google.com');


