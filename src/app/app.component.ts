import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
import { Income } from './models/income';
import { Account } from './models/account';
import { IncomeCategory } from './models/incomeCategory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private ts: TransactionService) {}

  incomes: Income[];
  ngOnInit() {
    this.incomes = this.ts.getIncomes();
  }

  onAdd() {
    const income = new Income(
      new Date(),
      333,
      'jgier',
      new Account('graeg'),
      new IncomeCategory('Cat 3')
    );
    this.ts.addIncome(income);
    this.incomes = this.ts.getIncomes();
  }
}
