import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UIService } from './services/ui.service';
import { NewIncomeComponent } from './transactions/incomes/new-income/new-income.component';
import { NewCostComponent } from './transactions/costs/new-cost/new-cost.component';
import { NewTransferComponent } from './transactions/transfers/new-transfer/new-transfer.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';

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

  initModal(componentType: string) {
    switch (componentType) {
      case 'Income':
        this.ui.showModal(NewIncomeComponent, {}, {});
        break;
      case 'Cost':
        this.ui.showModal(NewCostComponent, {}, {});
        break;
      case 'Transfer':
        this.ui.showModal(NewTransferComponent, {}, {});
        break;
      case 'Account':
        this.ui.showModal(NewAccountComponent, {}, {});
        break;
      default:
        break;
    }
  }

  removeModal() {
    this.ui.hideModal();
  }
}
