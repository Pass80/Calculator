const display = document.querySelector('.display');
const secondaryDisplay = document.querySelector('.secondary-display');
const btnZero = document.querySelector('.zero');
const btnOne = document.querySelector('.one');
const btnTwo = document.querySelector('.two');
const btnThree = document.querySelector('.three');
const btnFour = document.querySelector('.four');
const btnFive = document.querySelector('.five');
const btnSix = document.querySelector('.six');
const btnSeven = document.querySelector('.seven');
const btnEight = document.querySelector('.eight');
const btnNine = document.querySelector('.nine');
const btnComma = document.querySelector('.comma');
const btnPlus = document.querySelector('.plus');
const btnMinus = document.querySelector('.minus');
const btnTimes = document.querySelector('.times');
const btnDivide = document.querySelector('.divide');
const btnEqual = document.querySelector('.equal');
const btnDelete = document.querySelector('.delete');

let operator ='';
let firstOperand = 0;
let secondOperand = null;
let finalResult = 0;
let displyedvalues = '0';

const addToSecondDisplay = ({newText, removeLastChart, reset}) => {
        if ( reset || (displyedvalues === '0' && typeof newText === 'number')) {
            displyedvalues = newText;
        } else {
            if ( removeLastChart) {
                displyedvalues = displyedvalues.slice(0, -1);
            }
            displyedvalues += newText;

        }
    secondaryDisplay.textContent = displyedvalues;
} 
const addNumber =  (num) => {
    addToSecondDisplay({newText: num});
    if (operator) {
        secondOperand = secondOperand * 10 + num; 
    } else {
        firstOperand = firstOperand * 10 + num;
    }
}
const calculate = () => {
    if (operator === '+') {
        return firstOperand + secondOperand;
    }  
    if (operator === '-') {
        return firstOperand - secondOperand;
    }
    if (operator === '*') {
        return firstOperand * secondOperand;
    }
    if (operator === '/') {
        return firstOperand / secondOperand;
    }
}
const addOperator = (newOperator) => {
    if (operator) {
        if (secondOperand !== null) {
            firstOperand = calculate();
            secondOperand = null;
            operator = newOperator;
            addToSecondDisplay({reset: true, newText: firstOperand + newOperator })

        } else {
            operator = newOperator;
            addToSecondDisplay({newText: newOperator,removeLastChart: true})
        }
    } else {
        operator = newOperator;
        addToSecondDisplay({newText : newOperator});
    }

}
btnOne.addEventListener('click', () => addNumber(1));
btnTwo.addEventListener('click', () => addNumber(2));
btnThree.addEventListener('click', () => addNumber(3));
btnFour.addEventListener('click', () => addNumber(4));
btnFive.addEventListener('click', () => addNumber(5));
btnSix.addEventListener('click', () => addNumber(6));
btnSeven.addEventListener('click', () => addNumber(7));
btnEight.addEventListener('click', () => addNumber(8));
btnNine.addEventListener('click', () => addNumber(9));
btnZero.addEventListener('click', () => addNumber(0));
btnComma.addEventListener('click', () => addNumber('.'));
btnTimes.addEventListener('click', () => addOperator('*'));
btnDivide.addEventListener('click', () => addOperator('/'));
btnMinus.addEventListener('click', () => addOperator('-'));
btnPlus.addEventListener('click', () => addOperator('+'));
btnEqual.addEventListener('click', () => {
    if (!operator) {
        return;
    }
    firstOperand = calculate();
    secondOperand = null;
    operator = '';
    addToSecondDisplay({reset: true, newText: firstOperand});
    display.textContent = firstOperand;
});
btnDelete.addEventListener('click', () => {
    firstOperand = 0;
    secondOperand = null;
    operator = '';
    addToSecondDisplay({reset: true, newText: 0});
    display.textContent = '';
});













