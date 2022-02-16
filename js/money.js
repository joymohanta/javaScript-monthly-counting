function calculation() {
  const paymentInput = document.getElementById("payment");
  const payment = parseFloat(paymentInput.value);
  const balance = document.getElementById("balance");
  const balanceNumber = parseFloat(balance.innerText);
  const totalBalance = payment;
  balance.innerText = totalBalance - calculationExpense();
  return balance.innerText;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const paymentInput = document.getElementById("payment");
  const payment = parseFloat(paymentInput.value);
  if (payment > 0) {
    calculation();
  }
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
  const foodInput = document.getElementById("food");
  const food = parseFloat(foodInput.value);
  const rentInput = document.getElementById("rent");
  const rent = parseFloat(rentInput.value);
  const clothInput = document.getElementById("cloth");
  const cloth = parseFloat(clothInput.value);
  if (food > 0 || rent > 0 || cloth > 0) {
    calculationExpense();
  }

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
  if (inputNumber > 0) {
    const paymentInput = document.getElementById("payment");
    const payment = parseFloat(paymentInput.value);
    const countPercent = payment * (inputNumber / 100);
    const saveTotal = document.getElementById("total-save");
    const total = parseFloat(saveTotal.innerText);
    saveTotal.innerText = countPercent;
    //Remaining Balance
    const remainingBalance = document.getElementById("rest-balance");
    const remain = parseFloat(remainingBalance.innerText);
    const netBalance = calculation() - saveTotal.innerText;
    remainingBalance.innerText = netBalance;
  }
});
