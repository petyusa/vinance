import { Component, OnInit } from '@angular/core';
import { Income } from '../../../models/models';
import { TransactionService } from '../../../services/transaction.service';
import { Subscription } from 'rxjs';
import { UIService } from '../../../services/ui.service';
import { NewIncomeComponent } from '../new-income/new-income.component';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {
  incomes: Income[] = [];
  incomesChanged: Subscription;

  constructor(private ts: TransactionService, private ui: UIService) {}

  ngOnInit() {
    this.incomes = this.ts.getIncomes();
    this.incomesChanged = this.ts.incomesChanged.subscribe((incomes) => {
      this.incomes = incomes;
    });
  }

  onDeleteIncome(id: string) {
    this.ts.deleteIncome(id);
  }

  onEditIncome(id: string) {
    this.ui.showModal(NewIncomeComponent, { id }, {});
  }
}
