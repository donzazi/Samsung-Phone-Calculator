const buttons = document.querySelectorAll("button");

const inputField = document.getElementById("result");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const buttonValue = buttons[i].innerHTML;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      showValue(buttonValue);
    }
  });
}

function clearResult() {
  inputField.value = "";
}

function calculateResult() {
  inputField.value = eval(inputField.value);
}

function showValue(buttonValue) {
  inputField.value += buttonValue;
}
