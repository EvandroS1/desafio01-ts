import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  

  getLoan = (loanValue: number): void => {
    if(this.status) {
      let resultado: number = loanValue - this.balance
      this.setBalance(resultado)
      console.log(`emprestimo no valor de ${loanValue} feito, saldo devedor:`,this.balance);
      
    } else {
      console.log('Conta inválida');
    }
    
  }
}
