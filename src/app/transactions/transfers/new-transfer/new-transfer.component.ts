import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Transfer } from '../../../models/models';
import { UIService } from '../../../services/ui.service';
import { TransferService } from '../../../services/transfer.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {
  @Input() id = '';
  transferForm: FormGroup;

  constructor(private ts: TransferService, private ui: UIService) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const values = this.transferForm.value;
    const transfer = new Transfer(
      values.id,
      values.date,
      values.amount,
      values.comment,
      values.from,
      values.to,
      values.category
    );
    if (this.id === '') {
      this.ts.add(transfer);
    } else {
      this.ts.edit(transfer);
    }

    this.ui.hideModal();
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
          to: transfer.to,
          from: transfer.from,
          amount: transfer.amount,
          category: transfer.category,
          comment: transfer.comment
        });
      });
    }
  }
}
