let currentOperand = '' ;
let previousOperand = ''
let operator = null;

const numBtn = document.querySelectorAll("[data-number]");
const operationBtn = document.querySelectorAll("[data-operation]");
const equalBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const clearBtn = document.querySelector("[data-all-clear]");
const upperText = document.querySelector("[data-previous-operand]");
const lowerText = document.querySelector("[data-current-operand]");

const multiply = (x, y) => x * y ;
const divide = (x, y) => x / y ;
const add = (x, y) => x + y ;
const subtract = (x, y) => x - y ;

numBtn.forEach(button => {
    button.addEventListener('click', () => {
        currentOperand += button.innerText
        console.log(currentOperand);
        display()
    }) 
})

operationBtn.forEach(button => {
    button.addEventListener('click', () => {

    })
})

function display(){
    lowerText.innerText = currentOperand
    upperText.innerText = `${currentOperand} ${operator}`
}


function operate (operation, num1, num2){
    switch (operation){
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            if (num2 === 0) return null
            return divide (num1, num2)
    }
}

