let currentValue = 0;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculate(input) {
  console.log(`Input: ${input}`);
  const values = input.split("");
  const operator = values[1];
  const num1 = Number(values[0]);
  const num2 = Number(values[2]);
  switch(operator){
    case "+":
        console.log(add(num1, num2));
        break;
    case "-":
        console.log(subtract(num1, num2));
        break;
    case "x":
        console.log(multiply(num1, num2));
        break;
    case "/":
        console.log(divide(num1, num2));
        break;
  }
}

const inputField = document.querySelector("#calcInput");

const calcButton = document.querySelector("#calculateButton");
calcButton.addEventListener("click", () => {
  const input = inputField.value;
  calculate(input);
});
/** Plan
 *  - Create UI (grid-style)
 *  - wire UI to script
 *  - 5+5 then clicking an operator will calculate the initial values
 *  - Backspace button, clear button, decimal button
 */
