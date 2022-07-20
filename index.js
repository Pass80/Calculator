let display = document.querySelector('.display');
let secondaryDisplay = document.querySelector('.secondary-display');
const keysPad = document.querySelector('.calculator-keys');
let operator ='';
let firstOperand = null;
let secondOperand = null;
let finalResult = null;


const getResult = () => {
    if (operator === '/') {
        finalResult = firstOperand / secondOperand;
        console.log(finalResult);
        display.textContent = finalResult.toString();
    } else if (operator === '+') {
        finalResult = firstOperand + secondOperand;
        console.log(finalResult);
        display.textContent = finalResult.toString();
    } else if (operator === '-') {
        finalResult = firstOperand - secondOperand;
        console.log(finalResult);
        display.textContent = finalResult.toString();
    } else if (operator === '*') {
        finalResult = firstOperand * secondOperand;
        console.log(finalResult);
        display.textContent = finalResult.toString();
    } 
}

keysPad.addEventListener('click', (e) => {
    const key = e.target;
    const keyValue = key.textContent;
    const displayedValue = display.textContent;
    secondaryDisplay.textContent += key.textContent;

    // check if the pressed key is a number

    if (key.dataset.type ==='number') {
        if (displayedValue === '0') {
            display.textContent = keyValue;
        } else {
            display.textContent = displayedValue + keyValue;
        }
    }
    
    // check if the pressed key is an operator

    if (key.dataset.type === 'operator' && key.textContent !== '=') {
        firstOperand = parseFloat(display.textContent);
        console.log(firstOperand);
        operator = key.textContent;
       // if (operator !== '') {
       //     display.textContent = '';
       //     return;
       // }
    }

    if (operator !== '' && key.dataset.type ==='number') {
        secondOperand = parseFloat(display.textContent);
        console.log(secondOperand);
        
    }

    if (key.textContent === 'AC') {
        display.textContent = '0';
        secondaryDisplay.textContent = '';
    }

    if (key.textContent === '=') {
        console.log(key.textContent);
        getResult();
    }
});
console.log(typeof(secondaryDisplay.textContent));
