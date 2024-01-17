export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  status: boolean = true
  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      let resultado:number = this.balance + value 
      this.setBalance(resultado)
      console.log(`Voce depositou ${value}, o novo saudo da conta é:`, this.balance)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()) {
      if(value > this.balance) {
        console.log('você esta pobre!');
      } else {
        let resultado: number = this.balance - value 
        this.setBalance(resultado)
        console.log(`sacado ${value}, novo saldo em conta:`, this.balance);
        
      }
    }
  }

  getBalance = (): void => {
    // console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
