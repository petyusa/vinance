import { Component, OnInit } from '@angular/core';
import { Income } from '../../../models/models';
import { TransactionService } from '../../../transaction.service';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {
  incomes: Income[] = [];

  constructor(private ts: TransactionService) {}

  ngOnInit() {
    this.incomes = this.ts.getIncomes();
  }
}
