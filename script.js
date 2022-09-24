let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";

let typeNum = "";

let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equal");

numberButtons.forEach((element) => {
  element.addEventListener("click", () => {
    // add/assign the innertext of button to tupenum
    typeNum = typeNum + element.textContent;
  });
});

operatorButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (firstNum === "") {
      firstNum = typeNum;
      typeNum = "";
    } else {
      secondNum = typeNum;
      typeNum = "";
    }
    operator = element.textContent;
  });
});

equalButton.addEventListener("click", (e) => {
  console.log(`first no : ${firstNum}`);
  console.log(`second no : ${secondNum}`);
  console.log(`operator : ${operator}`);
});
