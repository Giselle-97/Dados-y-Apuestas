'use strict'

const btn = document.querySelector('.js_btn');
const select = document.querySelector('.js_select');
const menssage = document.querySelector('.js_mensage');
const balance = document.querySelector('.js_balance');
const number = document.querySelector('.js_number')
const randomNumber = getRandomNumber(6)



function handleClickBtn (event){
    event.preventDefault();
    
    if (parseInt(select.value) === randomNumber) {
        message.innerHML =  'Has ganado el doble de lo apostado';
        }else {
        message.innerHTML = 'Has perdido lo apostado';
        }
    console.log('handleClickBtn');
}


function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}
 console.log('getRandomNumber');


btn.addEventListener('click' , handleClickBtn);

