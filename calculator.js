// JavaScript for Calculator
let expression = '';

function addToExpression(value) {
  if (!isNaN(value) || value === '.') {
    expression += value;
    document.getElementById('result').value = expression;
  } else {
    alert('Only numbers are allowed!');
  }
}
function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = '';
  } catch (error) {
    alert('Invalid expression!');
    clearResult();
  }
}
const memoryBTN = document.createElement("button");
memoryBTN.setAttribute("id", "mplus");
memoryBTN.innerText = "M";

const memoryClearBTN = document.createElement("button");
memoryClearBTN.setAttribute("id", "mclear");
memoryClearBTN.innerText = "MC";

const memoryplus = document.createElement("button");
memoryplus.setAttribute("id", "mplus");
memoryplus.innerText = "M+";
document.body.append(memoryBTN, memoryClearBTN, memoryplus);

memoryBTN.addEventListener("click", () => {
  localStorage.setItem("memory", 40);
});
memoryplus.addEventListener("click", () => {
  const value = localStorage.getItem("memory");
  console.log(value);
});
memoryClearBTN.addEventListener("click", () => {
  localStorage.removeItem("memory");
});
