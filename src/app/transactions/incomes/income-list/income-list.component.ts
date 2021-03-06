import { Component, OnInit, OnDestroy } from '@angular/core';

import { Income } from '../../../models/models';
import { IncomeService } from '../../../services/income.service';
import { UIService } from '../../../services/ui.service';
import { NewIncomeComponent } from '../new-income/new-income.component';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit, OnDestroy {
  incomes: Income[];
  isLoading = true;
  subscription: Subscription;

  constructor(private is: IncomeService, private ui: UIService) {}

  ngOnInit() {
    this.subscription = this.is.incomes.subscribe((items) => {
      this.incomes = items;
    });
    this.isLoading = false;
  }

  onEdit(id: string) {
    this.ui.showModal(NewIncomeComponent, { id }, {});
  }

  onDelete(id: string) {
    this.is.delete(id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
