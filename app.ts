import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { DioAccount } from './class/DioAccount'
import { SalaryAccount } from './class/SalaryAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'People', 10)
console.log(peopleAccount.balance);
peopleAccount.deposit(20)
peopleAccount.getBalance()
peopleAccount.getName()
console.log(peopleAccount.status);
peopleAccount.withdraw(10)

const companyAccount: CompanyAccount = new CompanyAccount('Company', 20)
console.log(companyAccount.balance);
companyAccount.deposit(20)
companyAccount.getBalance()
companyAccount.getName()
console.log(companyAccount.status);
companyAccount.withdraw(10)
companyAccount.getLoan(90)

const dioAccount: DioAccount = new CompanyAccount('Dio', 30)
console.log(dioAccount.balance);
dioAccount.deposit(20)
dioAccount.getBalance()
dioAccount.getName()
console.log(dioAccount.status);
dioAccount.withdraw(10)

const salaryAccount: SalaryAccount = new SalaryAccount('Salary', 40)
console.log(salaryAccount.balance);
salaryAccount.deposit(10)
salaryAccount.getBalance()
salaryAccount.getName()
console.log(salaryAccount.status);
salaryAccount.withdraw(10)
// salaryAccount.salaryDeposit(10)
