import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Account, Income } from '../../../models/models';
import { UIService } from '../../../services/ui.service';
import { IncomeService } from '../../../services/income.service';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-new-income',
  templateUrl: './new-income.component.html',
  styleUrls: ['./new-income.component.scss']
})
export class NewIncomeComponent implements OnInit, OnDestroy {
  @Input() id = '';
  incomeForm: FormGroup;
  accounts: Account[];
  subscription: Subscription;

  constructor(private ui: UIService, private is: IncomeService, private accSer: AccountService) {}

  ngOnInit() {
    this.subscription = this.accSer.accountsChanged.subscribe((accounts) => {
      this.accounts = accounts;
    });
    this.accSer.refreshAccounts();
    this.initForm();
  }

  onSubmitIncome() {
    const values = this.incomeForm.value;
    const accName = values.to.split('&')[0];
    const accId = values.to.split('&')[1];
    const income = new Income(
      values.id,
      new Date(values.date),
      values.amount,
      values.comment,
      accName,
      accId,
      values.category
    );
    if (this.id !== '') {
      this.is.edit(income);
    } else {
      this.is.add(income);
    }
    this.ui.hideModal();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm() {
    const today = new Date().toISOString().substring(0, 10);
    this.incomeForm = new FormGroup({
      id: new FormControl(''),
      date: new FormControl(today, [Validators.required]),
      to: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.min(1)]),
      category: new FormControl('', Validators.required),
      comment: new FormControl('')
    });
    if (this.id !== '') {
      this.is.get(this.id).subscribe((income) => {
        this.incomeForm.setValue({
          id: income.id,
          date: new Date(income.date.toDate()).toISOString().substring(0, 10),
          to: `${income.to}&${income.toId}`,
          amount: income.amount,
          category: income.category,
          comment: income.comment
        });
      });
    }
  }
}
