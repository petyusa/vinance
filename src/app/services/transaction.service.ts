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

  getIncome(id: string) {
    let found = null;
    this.incomes.forEach((income) => {
      if (income.id === id) {
        found = income;
      }
    });
    return found;
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
    this.incomesChanged.next([...this.incomes]);
  }

  addCost(costToAdd: Cost) {
    this.costs.push(costToAdd);
    this.costsChanged.next([...this.costs]);
  }

  getCosts() {
    return [...this.costs];
  }

  deleteCost(id: string) {
    this.costs.forEach((cost, index, arr) => {
      if (cost.id === id) {
        arr.splice(index, 1);
      }
    });
    this.costsChanged.next([...this.costs]);
  }

  addTransfer(transferToAdd: Transfer) {
    this.transfers.push(transferToAdd);
    this.transfersChanged.next([...this.transfers]);
  }

  getTransfers() {
    return [...this.transfers];
  }

  deleteTransfer(id: string) {
    this.transfers.forEach((transfer, index, arr) => {
      if (transfer.id === id) {
        arr.splice(index, 1);
      }
    });
    this.transfersChanged.next([...this.transfers]);
  }
}
