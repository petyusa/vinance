import { Component, OnInit } from '@angular/core';
import { Income } from '../../../models/models';
import { TransactionService } from '../../../services/transaction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {
  incomes: Income[] = [];
  incomesChanged: Subscription;

  constructor(private ts: TransactionService) {}

  ngOnInit() {
    this.incomes = this.ts.getIncomes();
    this.incomesChanged = this.ts.incomesChanged.subscribe((incomes) => {
      this.incomes = incomes;
    });
  }
}
