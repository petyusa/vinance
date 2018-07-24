import { Income } from './models/income';
import { Cost } from './models/cost';
import { Transfer } from './models/models';
import { Injectable } from '@angular/core';
import { Account } from './models/account';
import { IncomeCategory } from './models/incomeCategory';

@Injectable()
export class TransactionService {
  private incomes: Income[] = [
    new Income(new Date(), 2340, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 5547, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 154474, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 22103, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 1881, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 111, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 111, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 111, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 111, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 222, 'blabla', new Account('bla'), new IncomeCategory('Cat 2'))
  ];
  private costs: Cost[] = [];
  private transfers: Transfer[] = [];

  addIncome(incomeToAdd: Income) {
    this.incomes.push(incomeToAdd);
  }

  addCost(costToAdd: Cost) {
    this.costs.push(costToAdd);
  }

  addTransfer(transferToAdd: Transfer) {
    this.transfers.push(transferToAdd);
  }

  getIncomes(): Income[] {
    return [...this.incomes];
  }
}
