import { Component, OnInit } from '@angular/core';

import { Cost } from '../../../models/cost';
import { CostService } from '../../../services/cost.service';
import { UIService } from '../../../services/ui.service';
import { NewCostComponent } from '../new-cost/new-cost.component';

@Component({
  selector: 'app-cost-list',
  templateUrl: './cost-list.component.html',
  styleUrls: ['./cost-list.component.scss']
})
export class CostListComponent implements OnInit {
  costs: Cost[];

  constructor(private cs: CostService, private ui: UIService) {}

  ngOnInit() {
    this.cs.costs.subscribe((items) => {
      this.costs = items;
    });
  }

  onEdit(id: string) {
    this.ui.showModal(NewCostComponent, { id }, {});
  }

  onDelete(id: string) {
    this.cs.delete(id);
  }
}
