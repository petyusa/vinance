import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Income } from '../../../models/income';
import { TransactionService } from '../../../services/transaction.service';
import { UIService } from '../../../services/ui.service';

@Component({
  selector: 'app-new-income',
  templateUrl: './new-income.component.html',
  styleUrls: ['./new-income.component.scss']
})
export class NewIncomeComponent implements OnInit {
  incomeForm: FormGroup;
  constructor(private ts: TransactionService, private ui: UIService) {}

  ngOnInit() {
    this.incomeForm = new FormGroup({
      date: new FormControl(new Date().toISOString().substring(0, 10), [Validators.required]),
      accountTo: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.min(1)]),
      category: new FormControl('', Validators.required),
      comment: new FormControl('')
    });
  }

  onAddIncome() {
    const values = this.incomeForm.value;
    const income = new Income(
      values.date,
      values.amount,
      values.comment,
      values.accountTo,
      values.category
    );
    this.ts.addIncome(income);
    this.closeModal();
  }

  private closeModal() {
    this.ui.hideModal();
  }
}
