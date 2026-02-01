class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  // Deposit Method
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push({ type: "deposit", amount });
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return `Deposit amount must be greater than zero.`;
    }
  }
  // Withdraw Method
  withdraw(amount) {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({ type: "withdraw", amount });
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return `Insufficient balance or invalid amount.`;
    }
  }

  // Check Balance Method
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  // List Deposits Method
  listAllDeposits() {
    const allDeposits = this.transactions.filter(
      (transaction) => transaction.type === "deposit"
    );
    let deposit = allDeposits.map((all) => all.amount);
    return `Deposits: ${deposit.join(",")}`;
  }

  // List Withdrawals Method
  listAllWithdrawals() {
    const allWithdrawals = this.transactions.filter(
      (transaction) => transaction.type === "withdraw"
    );
    let withdrawal = allWithdrawals.map((all) => all.amount);
    return `Withdrawals: ${withdrawal.join(",")}`;
  }
}

//Testing
let myAccount = new BankAccount("account");

myAccount.deposit(100);
myAccount.deposit(-50);
myAccount.deposit(0);
myAccount.withdraw(150);
myAccount.withdraw(-50);
myAccount.withdraw(0);
myAccount.deposit(10);
myAccount.deposit(35);
myAccount.deposit(90);
myAccount.withdraw(20);
myAccount.withdraw(50);
myAccount.withdraw(100);
myAccount.deposit(100);

console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
