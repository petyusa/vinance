import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Transfer } from '../../../models/models';
import { TransferCategory } from '../../../models/transferCategory';
import { TransactionService } from '../../../transaction.service';
import { UIService } from '../../../services/ui.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {
  transferForm: FormGroup;

  constructor(private ts: TransactionService, private ui: UIService) {}

  ngOnInit() {
    this.transferForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
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
      values.date,
      values.amount,
      values.comment,
      values.accountFrom,
      values.accountTo,
      new TransferCategory('fd')
    );
    this.ts.addTransfer(transfer);
    this.closeModal();
  }

  private closeModal() {
    this.ui.hideModal();
  }
}
