import { Component, OnInit } from '@angular/core';
import { Cost } from '../../../models/cost';
import { Subscription } from 'rxjs';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-cost-list',
  templateUrl: './cost-list.component.html',
  styleUrls: ['./cost-list.component.scss']
})
export class CostListComponent implements OnInit {
  costs: Cost[] = [];
  costsChanged: Subscription;

  constructor(private ts: TransactionService) {}

  ngOnInit() {
    this.costs = this.ts.getCosts();
    this.costsChanged = this.ts.costsChanged.subscribe((costs) => {
      this.costs = costs;
    });
  }

  onDeleteCost(id: string) {
    this.ts.deleteCost(id);
  }
}
