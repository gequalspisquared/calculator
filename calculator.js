// global variables
let eq = ''; // equation
let cur = ''; // answer
let num1 = '';
let num2 = '';
let op = '';

const ops = ['/', '*', '-', '+'];

// grab important pieces from document
const calculator = document.querySelector('.calculator');

const buttons = calculator.querySelector('.buttons');
buttons.style.gridTemplateColumns = `repeat(${4}, auto)`;

const display = document.querySelector('.display');
const equation = display.querySelector('.equation');
const btns = document.querySelectorAll('.btn');
const current = display.querySelector('.current');
current.textContent = '0';

// add event listeners
addListeners();