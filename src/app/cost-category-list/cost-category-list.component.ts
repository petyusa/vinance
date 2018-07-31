import { Component, OnInit } from '@angular/core';

import { CostCategoryService } from '../services/cost-category.service';
import { CostCategory } from '../models/costCategory';
import { UIService } from '../services/ui.service';

@Component({
  selector: 'app-cost-category-list',
  templateUrl: './cost-category-list.component.html',
  styleUrls: ['./cost-category-list.component.scss']
})
export class CostCategoryListComponent implements OnInit {
  costs: CostCategory[] = [];
  isloading: boolean;

  constructor(private coCaSer: CostCategoryService) {}

  ngOnInit() {
    this.isloading = true;
    this.coCaSer.costCategories.subscribe((cats) => (this.costs = cats));
    this.isloading = false;
  }
}
