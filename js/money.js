function calculation() {
  const paymentInput = document.getElementById("payment");
  const payment = parseFloat(paymentInput.value);
  const balance = document.getElementById("balance");
  const balanceNumber = parseFloat(balance.innerText);
  const totalBalance = payment;
  balance.innerText = totalBalance - calculationExpense();
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  calculation();
  /* const paymentInput = document.getElementById("payment");
  const payment = parseFloat(paymentInput.value);
  const balance = document.getElementById("balance");
  const balanceNumber = parseFloat(balance.innerText);
  const totalBalance = payment;
  balance.innerText = totalBalance; */
});
function calculationExpense() {
  const foodInput = document.getElementById("food");
  const food = parseFloat(foodInput.value);
  const rentInput = document.getElementById("rent");
  const rent = parseFloat(rentInput.value);
  const clothInput = document.getElementById("cloth");
  const cloth = parseFloat(clothInput.value);

  const expense = document.getElementById("expense");
  const expenseNumber = parseFloat(expense.innerText);
  const totalExpense = food + rent + cloth;
  expense.innerText = totalExpense;
  return totalExpense;
}
document.getElementById("calculate-btn").addEventListener("click", function () {
  calculationExpense();
  // console.log(calculationExpense());
  /* const foodInput = document.getElementById("food");
  const food = parseFloat(foodInput.value);
  const rentInput = document.getElementById("rent");
  const rent = parseFloat(rentInput.value);
  const clothInput = document.getElementById("cloth");
  const cloth = parseFloat(clothInput.value);

  const expense = document.getElementById("expense");
  const expenseNumber = parseFloat(expense.innerText);
  const totalExpense = food + rent + cloth;
  expense.innerText = totalExpense; */
});
//saving part
document.getElementById("save-btn").addEventListener("click", function () {
  const saveInput = document.getElementById("percent-input");
  const inputNumber = parseFloat(saveInput.value);

  const paymentInput = document.getElementById("payment");
  const payment = parseFloat(paymentInput.value);

  const countPercent = payment * (inputNumber / 100);

  const savetotal = document.getElementById("total-save");
  const total = parseFloat(savetotal.innerText);
  savetotal.innerText = countPercent;
});
