import { Income } from '../models/income';
import { Cost } from '../models/cost';
import { Transfer } from '../models/models';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { testData } from '../models/testdata';

@Injectable()
export class TransactionService {
  private incomes: Income[] = [];
  private costs: Cost[] = [];
  private transfers: Transfer[] = [];
  incomesChanged = new Subject<Income[]>();
  costsChanged = new Subject<Cost[]>();
  transfersChanged = new Subject<Transfer[]>();

  constructor() {
    this.incomes = testData.incomes;
    this.costs = testData.costs;
    this.transfers = testData.transfers;
  }

  addIncome(incomeToAdd: Income) {
    this.incomes.push(incomeToAdd);
    this.incomesChanged.next([...this.incomes]);
  }

  getIncomes(): Income[] {
    return [...this.incomes];
  }

  deleteIncome(id: string) {
    this.incomes.forEach((income, index, arr) => {
      if (income.id === id) {
        arr.splice(index, 1);
      }
    });
  }

  addCost(costToAdd: Cost) {
    this.costs.push(costToAdd);
    this.costsChanged.next([...this.costs]);
  }

  addTransfer(transferToAdd: Transfer) {
    this.transfers.push(transferToAdd);
    this.transfersChanged.next([...this.transfers]);
  }

  getCosts() {
    return [...this.costs];
  }

  getTransfers() {
    return [...this.transfers];
  }
}
