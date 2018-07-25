import { Component, OnInit, Input } from '@angular/core';
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
  @Input() id = '';
  incomeForm: FormGroup;
  constructor(private ts: TransactionService, private ui: UIService) {}

  ngOnInit() {
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
      const incomeToEdit = this.ts.getIncome(this.id);
      this.incomeForm.setValue(incomeToEdit);
    }
    console.log(this.id);
  }

  onAddIncome() {
    const values = this.incomeForm.value;
    const income = new Income(
      '999',
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
