import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Account, Cost } from '../../../models/models';
import { UIService } from '../../../services/ui.service';
import { CostService } from '../../../services/cost.service';
import { AccountService } from '../../../services/account.service';
import { CostCategoryService } from '../../../services/cost-category.service';
import { CostCategory } from '../../../models/costCategory';

@Component({
  selector: 'app-new-cost',
  templateUrl: './new-cost.component.html',
  styleUrls: ['./new-cost.component.scss']
})
export class NewCostComponent implements OnInit, OnDestroy {
  @Input() id = '';
  costForm: FormGroup;
  accounts: Account[] = [];
  cocas: CostCategory[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private cs: CostService,
    private ui: UIService,
    private accSer: AccountService,
    private coCaSer: CostCategoryService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.accSer.accountsChanged.subscribe((accs) => {
        accs.forEach((acc) => {
          if (!acc.isSaving) {
            this.accounts.push(acc);
          }
        });
      })
    );
    this.subscriptions.push(
      this.coCaSer.costCategories.subscribe((cats) => {
        this.cocas = cats;
      })
    );
    this.accSer.refreshAccounts();
    this.initForm();
  }

  onSubmit() {
    const values = this.costForm.value;
    const accId = values.from.split('&')[1];
    const accName = values.from.split('&')[0];
    const catId = values.category.split('&')[1];
    const catName = values.category.split('&')[0];
    const cost = new Cost(
      values.id,
      new Date(values.date),
      values.amount,
      values.comment,
      accName,
      accId,
      catName,
      catId
    );
    if (this.id !== '') {
      this.cs.edit(cost);
    } else {
      this.cs.add(cost);
    }
    // this.ui.hideModal();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  private initForm() {
    const today = new Date().toISOString().substring(0, 10);
    this.costForm = new FormGroup({
      id: new FormControl(''),
      date: new FormControl(today, [Validators.required]),
      from: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.min(1)]),
      category: new FormControl('', Validators.required),
      comment: new FormControl('')
    });
    if (this.id !== '') {
      this.cs.get(this.id).subscribe((cost) => {
        this.costForm.setValue({
          id: cost.id,
          date: new Date(cost.date.toDate()).toISOString().substring(0, 10),
          from: `${cost.from}&${cost.fromId}`,
          amount: cost.amount,
          category: `${cost.category}&${cost.categoryId}`,
          comment: cost.comment
        });
      });
    }
  }
}
