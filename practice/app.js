const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expenseList = document.querySelector('#expense-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    // .trim() removes excess white space at beginning and end. This confirms content was entered
    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expenseList.appendChild(newItem);

    // + before enteredAmount converts string to number since any value you fetch from an input is a string
    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = '$' + totalExpenses;
    clear();
})

// executed dynamically because clear is a reference without ()
cancelBtn.addEventListener('click', clear);