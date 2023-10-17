// const seven = document.getElementById("7");

// seven.addEventListener('click', () => {
//     // console.log('Element clicked through function!');
//     document.body.append('7');
// });


// numbers to display
const calcDisplay = document.getElementById("calc-display");

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.textContent;
    updateDisplay(number);
    });
});


function updateDisplay(number) {
    const currentDisplay = calcDisplay.textContent;
    calcDisplay.textContent = currentDisplay + number;
  };


// operation to display
const calcDisplayOperation = document.getElementById("calc-display");
  
const operationButton = document.querySelectorAll(".operation-button");
  operationButton.forEach(button => {
      button.addEventListener('click', () => {
          const operation = button.textContent;
      updateDisplay(operation);
      });
  });
  
  
function updateDisplay(operation) {
    const currentDisplays = calcDisplayOperation.textContent;
    calcDisplayOperation.textContent = currentDisplays + operation;
}


// getting sum 
const sumButton = document.getElementById("=");
    sumButton.addEventListener('click', () => {
       performAddition()
    });

function performAddition(){
    const currentDisplayed = calcDisplayOperation.textContent;
    const numbers = currentDisplayed.split("+").map(parseFloat);
    const sum = numbers.reduce((total, num) => total + num, 0);
    calcDisplayOperation.textContent = sum;
}

// getting subtraction
const subtractionButton = document.getElementById("-");
    subtractionButton.addEventListener('click', () => {
        performSubtraction()
    });

function performSubtraction(){
    const subDisplay =  calcDisplayOperation.textContent;
    const num = subDisplay.split("-").map(parseFloat);
    const result = num.reduce((total, num) => total - num);
    calcDisplayOperation.textContent = result;
}

