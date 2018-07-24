import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UIService } from './services/ui.service';
import { NewIncomeComponent } from './transactions/incomes/new-income/new-income.component';
import { NewCostComponent } from './transactions/costs/new-cost/new-cost.component';
import { NewTransferComponent } from './transactions/transfers/new-transfer/new-transfer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private ui: UIService) {}

  stateChanged: Subscription;
  isSidenavOpen = true;

  ngOnInit() {
    this.stateChanged = this.ui.sidenavStateChanged.subscribe(() => {
      this.isSidenavOpen = !this.isSidenavOpen;
    });
  }

  initIncomeModal() {
    this.ui.showModal(NewIncomeComponent, {}, {});
  }

  initCostModal() {
    this.ui.showModal(NewCostComponent, {}, {});
  }

  initTransferModal() {
    this.ui.showModal(NewTransferComponent, {}, {});
  }

  removeModal() {
    this.ui.hideModal();
  }
}
