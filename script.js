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

  // if (isNaN(parts[0])) {
  //   alert("Invalid Number!");
  //   currentValue = "Invalid Number";
  //   return;
  // }

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

function clear() {
  currentInput = "";
  currentValue = 0;
  updateScreens("", "");
}

function backspace() {}

const inputField = document.querySelector("#calcInput");

const screen = document.querySelector("#mainScreen");
const secondaryScreen = document.querySelector("#secondaryScreen");

const inputButtons = document.querySelector(".inputButtons");
inputButtons.addEventListener("click", (e) => {
  if (e.target.classList.contains("inputButton")) {
    const btnText = e.target.textContent;

    if (currentInput.toString() === "NaN") {
      clear();
    }
    if (e.target.classList.contains("functionButton")) {
      switch (e.target.textContent) {
        case "Clear":
          clear();
          break;
        case "Backspace":
          backspace();
          break;
      }
      return;
    }

    if (
      e.target.classList.contains("calculateButton") ||
      (e.target.classList.contains("operatorButton") &&
        operators.some((op) => currentInput.includes(op)))
    ) {
      console.log(`Check: ${currentValue}`);
      operate();
      if (e.target.classList.contains("calculateButton")) {
        screen.textContent = currentInput;
        return;
      }
    }

    currentInput += btnText;
    updateScreens(currentInput, "");
    // screen.textContent = currentInput;
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
 * Next to do: add decimal operator
 * Handle non-valid decimal like 0.5.3
 * Next to do: add backspace and clear
 * Next to add: keyboard support
 * */

/**
 * If isNaN, reset calculator on input
 */
