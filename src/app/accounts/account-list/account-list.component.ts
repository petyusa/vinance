import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../../services/account.service';

import { Account } from '../../models/models';
import { Subscription } from '../../../../node_modules/rxjs';
import { UIService } from '../../services/ui.service';
import { NewAccountComponent } from '../new-account/new-account.component';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit, OnDestroy {
  accounts: Account[];
  subscription: Subscription;
  isLoading = true;

  constructor(private accSer: AccountService, private uiSer: UIService) {}

  ngOnInit() {
    this.accSer.accounts$.subscribe((accounts) => {
      this.accounts = accounts;
      this.isLoading = false;
    });
  }

  onAdd() {
    this.uiSer.showModal(NewAccountComponent, {}, {});
  }

  onEdit(id: string): void {
    this.uiSer.showModal(NewAccountComponent, { id }, {});
  }

  onDelete(accId: string): void {
    this.accSer.delete(accId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
