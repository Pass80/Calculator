const display = document.querySelector('.display');
const secondaryDisplay = document.querySelector('.secondary-display');
const keysPad = document.querySelector('.calculator-keys');
let operator ='';
let firstOperand = null;
let secondOperand = null;
let finalResult = null;
let comma = '';
let zero = '';
const expression = /\+|\*|\-|\//;

// creating a function to perform the operations 
const getResult = () => {
    if (operator === '/') {
        finalResult = firstOperand / secondOperand;
        console.log(finalResult);
    } else if (operator === '+') {
        finalResult = firstOperand + secondOperand;
        console.log(finalResult);
    } else if (operator === '-') {
        finalResult = firstOperand - secondOperand;
        console.log(finalResult);
    } else if (operator === '*') {
        finalResult = firstOperand * secondOperand;
        console.log(finalResult);
    } 
    
    display.textContent = finalResult.toString();
    operator = '';
}

keysPad.addEventListener('click', (e) => {
    const key = e.target;
    const keyValue = key.textContent;
    console.log({txtContent: secondaryDisplay.textContent, keyValue, });

    if(finalResult !== null && firstOperand === null && !operator){
        if(key.dataset.type !== 'operator'){
        secondaryDisplay.textContent = '';
        display.textContent = '';
        finalResult= null
    }
    }

    if (key.textContent === 'AC') {
        secondaryDisplay.textContent = '';
        display.textContent = '';
        firstOperand = null;
        secondOperand = null;
        finalResult = null;
        operator = '';
        return
    }
    
    if (key.textContent === '.' &&   secondaryDisplay.textContent.includes('.')) {
        return
    }

    if(keyValue === "Del"){
        secondaryDisplay.textContent = secondaryDisplay.textContent.substring(0, secondaryDisplay.textContent.length -1)
        return
    }

    
    if (key.textContent === '.' &&   secondaryDisplay.textContent.includes('.')) {
        return
    }

    if (key.textContent === '=' || (key.dataset.type === 'operator' && operator !== '')) {
        const numbers = secondaryDisplay.textContent.split(expression);
        if(numbers[0] === "" || numbers[0] === undefined || numbers[1] === "" || numbers[1] === undefined) return;
        firstOperand = parseFloat(numbers[0]);
        secondOperand = parseFloat(numbers[1]);
        
        getResult();
        secondaryDisplay.textContent = finalResult;
        firstOperand = null;
        secondOperand = null;
        operator = '';
        console.log(firstOperand, secondOperand);
        console.log(key.textContent);
        if(key.textContent === '=' ) return
    }

    if (key.dataset.type === 'operator') {
        operator = key.textContent;
    }

    secondaryDisplay.textContent += key.textContent;
});

