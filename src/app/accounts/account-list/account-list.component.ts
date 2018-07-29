import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../../services/account.service';

import { Account } from '../../models/models';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit, OnDestroy {
  accounts: Account[];
  subscription: Subscription;

  constructor(private as: AccountService) {}

  ngOnInit() {
    this.as.accounts$.subscribe((accounts) => {
      this.accounts = accounts;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
