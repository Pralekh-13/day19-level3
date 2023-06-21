const form = document.getElementById('accountForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  const personAccount = {
    firstName: firstName,
    lastName: lastName,
    incomes: new Map(),
    expenses: new Map(),

    get totalIncome() {
      let total = 0;
      for (const income of this.incomes.values()) {
        total += income;
      }
      return total;
    },

    get totalExpense() {
      let total = 0;
      for (const expense of this.expenses.values()) {
        total += expense;
      }
      return total;
    },

    get accountInfo() {
      return `Account Information:
        Name: ${this.firstName} ${this.lastName}
        Total Income: ${this.totalIncome}
        Total Expense: ${this.totalExpense}`;
    },

    addIncome: function(description, amount) {
      if (typeof amount === 'number' && amount > 0) {
        this.incomes.set(description, amount);
        return 'Income added successfully.';
      } else {
        return 'Invalid amount. Please enter a positive number.';
      }
    },

    addExpense: function(description, amount) {
      if (typeof amount === 'number' && amount > 0) {
        this.expenses.set(description, amount);
        return 'Expense added successfully.';
      } else {
        return 'Invalid amount. Please enter a positive number.';
      }
    },

    get accountBalance() {
      return this.totalIncome - this.totalExpense;
    }
  };

  const accountInfoDiv = document.getElementById('accountInfo');
  accountInfoDiv.textContent = personAccount.accountInfo;

  form.reset();
});

function addIncome() {
  const incomeDescription = document.getElementById('incomeDescription').value;
  const incomeAmount = parseFloat(document.getElementById('incomeAmount').value);
  personAccount.addIncome(incomeDescription, incomeAmount);
}


function addExpense() {
  const expenseDescription = document.getElementById('expenseDescription').value;
  const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
  personAccount.addExpense(expenseDescription, expenseAmount);
}
