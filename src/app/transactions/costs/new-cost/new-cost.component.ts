import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cost } from '../../../models/models';
import { TransactionService } from '../../../services/transaction.service';
import { UIService } from '../../../services/ui.service';

@Component({
  selector: 'app-new-cost',
  templateUrl: './new-cost.component.html',
  styleUrls: ['./new-cost.component.scss']
})
export class NewCostComponent implements OnInit {
  costForm: FormGroup;
  constructor(private ts: TransactionService, private ui: UIService) {}

  ngOnInit() {
    const today = new Date().toISOString().substring(0, 10);
    this.costForm = new FormGroup({
      date: new FormControl(today, [Validators.required]),
      accountFrom: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.min(1)]),
      category: new FormControl('', Validators.required),
      comment: new FormControl('')
    });
  }

  onAddCost() {
    const values = this.costForm.value;
    const cost = new Cost(
      '999',
      values.date,
      values.amount,
      values.comment,
      values.accountFrom,
      values.category
    );
    this.ts.addCost(cost);
    this.closeModal();
  }

  private closeModal() {
    this.ui.hideModal();
  }
}
