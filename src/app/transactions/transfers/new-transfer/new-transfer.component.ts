import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Transfer } from '../../../models/models';
import { TransferCategory } from '../../../models/transferCategory';
import { TransactionService } from '../../../services/transaction.service';
import { UIService } from '../../../services/ui.service';
import { Account } from '../../../models/account';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {
  transferForm: FormGroup;

  constructor(private ts: TransactionService, private ui: UIService) {}

  ngOnInit() {
    const today = new Date().toISOString().substring(0, 10);
    this.transferForm = new FormGroup({
      date: new FormControl(today, [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.min(1)]),
      comment: new FormControl(''),
      accountTo: new FormControl('', Validators.required),
      accountFrom: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });
  }

  onAddTransfer() {
    const values = this.transferForm.value;
    const transfer = new Transfer(
      '999',
      values.date,
      values.amount,
      values.comment,
      new Account(values.accountFrom),
      new Account(values.accountTo),
      new TransferCategory('fd')
    );
    this.ts.addTransfer(transfer);
    this.closeModal();
  }

  private closeModal() {
    this.ui.hideModal();
  }
}
