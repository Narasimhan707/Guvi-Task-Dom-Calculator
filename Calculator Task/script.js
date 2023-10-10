const input = document.getElementById("input");
const buttons = document.querySelector(".buttons");

function handleKeyPress(event) {
  const key = event.key;
  if (/[0-9]/.test(key)) {
    input.value += key;
  } else if (
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "%"
  ) {
    input.value += ` ${key} `;
  } else if (key === "Enter") {
    calculateResult();
  } else {
    alert("Only numbers are allowed");
  }
}

function calculateResult() {
  try {
    const expression = input.value;
    const result = eval(expression);
    input.value = result;
  } catch (error) {
    alert("Invalid expression");
  }
}

window.addEventListener("keydown", handleKeyPress);

// Dynamically create calculator buttons
const buttonValues = [
  "7",
  "8",
  "9",
  "+",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "*",
  "C",
  "0",
  "=",
  "/",
  "%",
];
buttonValues.forEach((value) => {
  const button = document.createElement("button");
  button.textContent = value;
  button.addEventListener("click", () => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      input.value = "";
    } else {
      input.value += value;
    }
  });
  buttons.appendChild(button);
});
