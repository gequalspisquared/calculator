// global variables
let eq = ''; // equation
let ans = ''; // answer
let num1 = '0';
let num2 = '';
let op = '';

const ops = ['/', '*', '-', '+'];

// grab important pieces from document
const calculator = document.querySelector('.calculator');

const buttons = calculator.querySelector('.buttons');
buttons.style.gridTemplateColumns = `repeat(${4}, auto)`;

const display = document.querySelector('.display');
const equation = display.querySelector('.equation');
const btns = buttons.querySelectorAll('.btn');
const answer = display.querySelector('.answer');
answer.textContent = '0';

// add event listeners
addListeners();