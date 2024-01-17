import { DioAccount } from "./DioAccount";

export class SalaryAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }
  
  deposit = (value: number): void => {
    if(this.status){
      let resultado:number = this.balance + value + 10
      this.setBalance(resultado)
      console.log(`Voce depositou ${value}, o novo saudo da conta é:`, this.balance)
    }else {
      console.log('Conta inválida');
    }
  }


}