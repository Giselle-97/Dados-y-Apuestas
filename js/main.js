'use strict';

const btn = document.querySelector('.js_btn');
const select = document.querySelector('.js_select');
const messageElement = document.querySelector('.js_message');
const numberBetInput = document.querySelector('.js_numberBet');
const userBalance = document.querySelector('.js_balance');
let balance = 50;

//FUNCIONES
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const addBetNumber = () => {
  const betNumber = parseInt(numberBetInput.value);
  balance = balance + betNumber * 2;
  userBalance.innerHTML = balance;
};

const subtractBet = () => {
  const betNumber = parseInt(numberBetInput.value);
  balance = balance - betNumber;
  userBalance.innerHTML = balance;
};
const writeMessage = (msg) => {
  messageElement.innerHTML = msg;
};
//EVENTOS
const handleClickBtn = (event) => {
  event.preventDefault();
  const userNumber = parseInt(select.value);
  const randomNumber = getRandomNumber(6);
  if (userNumber === randomNumber) {
    writeMessage('Has ganado el doble de lo apostado😃');
    addBetNumber();
  } else {
    writeMessage('Has perdido lo apostado😢');
    subtractBet();
  }
};
btn.addEventListener('click', handleClickBtn);
