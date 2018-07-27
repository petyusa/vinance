import { Component, OnInit } from '@angular/core';

import { Income } from '../../../models/models';
import { IncomeService } from '../../../services/income.service';
import { UIService } from '../../../services/ui.service';
import { NewIncomeComponent } from '../new-income/new-income.component';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {
  incomes: Income[];

  constructor(private is: IncomeService, private ui: UIService) {}

  ngOnInit() {
    this.is.incomes.subscribe((items) => {
      this.incomes = items;
    });
  }

  onEdit(id: string) {
    this.ui.showModal(NewIncomeComponent, { id }, {});
  }

  onDelete(id: string) {
    this.is.delete(id);
  }
}
