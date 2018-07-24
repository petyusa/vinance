import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UIService } from './services/ui.service';
import { NewIncomeComponent } from './transactions/incomes/new-income/new-income.component';

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

  initLoginModal() {
    const inputs = {
      isMobile: false
    };
    this.ui.showModal(NewIncomeComponent, inputs, {});
  }

  removeModal() {
    this.ui.hideModal();
  }
}
