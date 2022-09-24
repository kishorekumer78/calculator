let typeNum = "";

let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equal");

let presentOp = document.querySelector(".presentOp");
let lastOp = document.querySelector(".lastOp");

numberButtons.forEach((element) => {
  element.addEventListener("click", () => {
    appendNumber(element.textContent);
  });
});

const appendNumber = (number) => {
  presentOp.textContent = presentOp.textContent + number;
};

operatorButtons.forEach((element) => {
  element.addEventListener("click", () => {
    dispalyLastOp(element.textContent);
    presentOp.textContent = "";
  });
});

const dispalyLastOp = (operator) => {
  lastOp.textContent = `${presentOp.textContent} ${operator}`;
};
