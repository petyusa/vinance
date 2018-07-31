import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Account, Transfer } from '../../../models/models';
import { UIService } from '../../../services/ui.service';
import { TransferService } from '../../../services/transfer.service';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit, OnDestroy {
  @Input() id = '';
  transferForm: FormGroup;
  accounts: Account[];
  subscription: Subscription;

  constructor(private ts: TransferService, private ui: UIService, private accSer: AccountService) {}

  ngOnInit() {
    this.subscription = this.accSer.accountsChanged.subscribe((accs) => (this.accounts = accs));
    this.accSer.refreshAccounts();
    this.initForm();
  }

  onSubmit() {
    const values = this.transferForm.value;
    const fromName = values.from.split('&')[0];
    const fromId = values.from.split('&')[1];
    const toName = values.to.split('&')[0];
    const toId = values.to.split('&')[1];
    const transfer = new Transfer(
      values.id,
      new Date(values.date),
      values.amount,
      values.comment,
      fromName,
      fromId,
      toName,
      toId,
      values.category
    );
    if (this.id === '') {
      this.ts.add(transfer);
    } else {
      this.ts.edit(transfer);
    }

    this.ui.hideModal();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm() {
    const today = new Date().toISOString().substring(0, 10);
    this.transferForm = new FormGroup({
      id: new FormControl(''),
      date: new FormControl(today, [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.min(1)]),
      comment: new FormControl(''),
      to: new FormControl('', Validators.required),
      from: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });
    if (this.id !== '') {
      this.ts.get(this.id).subscribe((transfer) => {
        transfer.date = new Date(transfer.date);
        this.transferForm.setValue({
          id: transfer.id,
          date: transfer.date.toISOString().substring(0, 10),
          to: `${transfer.to}&${transfer.toId}`,
          from: `${transfer.from}&${transfer.fromId}`,
          amount: transfer.amount,
          category: transfer.category,
          comment: transfer.comment
        });
      });
    }
  }
}
