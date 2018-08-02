import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chart } from 'chart.js';

import { UIService } from './services/ui.service';
import { NewIncomeComponent } from './transactions/incomes/new-income/new-income.component';
import { NewCostComponent } from './transactions/costs/new-cost/new-cost.component';
import { NewTransferComponent } from './transactions/transfers/new-transfer/new-transfer.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { CostCategoryService } from './services/cost-category.service';
import { CostCategory } from './models/costCategory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private ui: UIService, private cocaCser: CostCategoryService) {}

  stateChanged: Subscription;
  isSidenavOpen = true;
  costs: CostCategory[];
  dataArr = [];
  colors = [];
  labels = [];

  ngOnInit() {
    this.stateChanged = this.ui.sidenavStateChanged.subscribe(() => {
      this.isSidenavOpen = !this.isSidenavOpen;
    });
    this.cocaCser.costCategories.subscribe((cocas) => {
      this.costs = cocas;
      this.dataArr = [];
      this.colors = [];
      this.labels = [];
      this.costs.forEach((element) => {
        this.dataArr.push(element.balance);
        this.colors.push(element.color);
        this.labels.push(element.name);
      });
      this.showChart();
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

  showChart() {
    const ctx = (<HTMLCanvasElement>(
      document.getElementById('myChart')
    )).getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [
          {
            data: this.dataArr,
            backgroundColor: this.colors
          }
        ],
        labels: this.labels
      }
    });
  }
}
