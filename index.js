const display = document.querySelector('.display');
const keysPad = document.querySelector('.calculator-keys');

keysPad.addEventListener('click', (e) => {
    const key = e.target;
    const keyValue = key.textContent;
    const displayedValue = display.textContent;

    // check if the pressed key is a number

    if (key.classList.contains('number')) {
        if (displayedValue === '0') {
            display.textContent = keyValue;
        } else {
            display.textContent = displayedValue + keyValue;
        }
    }
    
    // check if the pressed key is an operator

    if (key.dataset.type === 'operator') {
        const firstOperand = display.textContent.;

        console.log(firstOperand);
         
    }
    
})
console.log('');
