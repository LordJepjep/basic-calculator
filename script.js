const operators = ["+", "-", "x", "÷"];

let currentValue = 0;
let currentInput = "";

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

  const parts = input.split(/([+\-x÷])/);
  console.log(parts);

  const num1 = Number(parts[0]);

  if (parts.length <= 1) {
    currentValue = num1;
    return;
  }

  const operator = parts[1];
  const num2 = Number(parts[2]);
  console.log(`Inputs: ${num1}${operator}${num2}`);

  switch (operator) {
    case "+":
      console.log(add(num1, num2));
      currentValue = add(num1, num2);
      break;
    case "-":
      console.log(subtract(num1, num2));
      currentValue = subtract(num1, num2);
      break;
    case "x":
      console.log(multiply(num1, num2));
      currentValue = multiply(num1, num2);
      break;
    case "÷":
      console.log(divide(num1, num2));
      currentValue = divide(num1, num2);
      break;
  }
}

function updateScreens(mainScreenText, secondScreenText) {
  screen.textContent = mainScreenText;
  secondaryScreen.textContent = secondScreenText;
}

function operate() {
  calculate(currentInput);
  updateScreens(currentValue, currentInput);
  currentInput = currentValue.toString();
}

const inputField = document.querySelector("#calcInput");

const screen = document.querySelector("#mainScreen");
const secondaryScreen = document.querySelector("#secondaryScreen");

const inputButtons = document.querySelector(".inputButtons");
inputButtons.addEventListener("click", (e) => {
  if (e.target.classList.contains("inputButton")) {
    const btnText = e.target.textContent;

    if (
      e.target.classList.contains("calculateButton") ||
      (e.target.classList.contains("operatorButton") &&
        operators.some((op) => currentInput.includes(op)))
    ) {
      console.log(e.target.textContent);
      operate();
      if (e.target.classList.contains("calculateButton")) {
        screen.textContent = currentInput;
        return;
      }
    }

    currentInput += btnText;
    screen.textContent = currentInput;
    console.log(`CurrentInput: ${currentInput}`);
  }
});

/** Plan
 *  - Create UI (grid-style)
 *  - wire UI to script
 *  - 5+5 then clicking an operator will calculate the initial values
 *  - Backspace button, clear button, decimal button
 */

/**
 * Next to do: should only show one operation at a time
 * Ex. 7+5 is valid 7+5+2 should not work
 * after 7+5, when an operation is clicked, it solves the
 * 7+5 first then displays result and the clicked operation
 * like 9+
 *
 * */
