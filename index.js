// 1-                  selectors :
// select the display screen
let screenOutPut = document.querySelector(".output");
let buttons = document.querySelectorAll(".btn");
//2-                  store the screen output  value
let currentInput = "";

// loop over the buttons && add event listener
buttons.forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button));
  //   button.addEventListener("click", (e) => console.log(e.target.dataset.num));
});
// hande button's click cases
function handleButtonClick(button) {
  const buttonValue = button.innerText;

  switch (buttonValue) {
    case "=":
      calculateResult();
      break;
    case "C":
      clearInput();
      break;
    case "CE":
      deleteLastEntry();
      break;
    default:
      updateInput(buttonValue);
  }
}
// update screen value function
function updateDisplay() {
  screenOutPut.value = currentInput;
}

function updateInput(value) {
  if (currentInput === "") {
    currentInput = value;
  } else {
    currentInput += value;
  }

  updateDisplay();
}

function clearInput() {
  currentInput = "";
  updateDisplay();
}
function deleteLastEntry() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}
// Calculate and display result
function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    alert("Invalid expression !!!! ");
    clearInput();
  }
}
