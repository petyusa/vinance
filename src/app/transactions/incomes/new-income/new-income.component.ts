import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Income } from '../../../models/income';
import { TransactionService } from '../../../services/transaction.service';
import { UIService } from '../../../services/ui.service';
import { Account } from '../../../models/account';
import { IncomeCategory } from '../../../models/incomeCategory';

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
      const incomeToEdit: Income = this.ts.getIncome(this.id);
      this.incomeForm.setValue({
        id: incomeToEdit.id,
        date: incomeToEdit.date.toISOString().substring(0, 10),
        to: incomeToEdit.to.name,
        amount: incomeToEdit.amount,
        category: incomeToEdit.category.name,
        comment: incomeToEdit.comment
      });
      console.log(this.id);
    }
  }

  onSubmitIncome() {
    console.log(this.id);
    const values = this.incomeForm.value;
    console.log(values.id);
    const income = new Income(
      values.id,
      new Date(values.date),
      values.amount,
      values.comment,
      new Account(values.to),
      new IncomeCategory(values.category)
    );
    if (this.id !== '') {
      this.ts.editIncome(income);
    } else {
      this.ts.addIncome(income);
    }
    this.closeModal();
  }

  private closeModal() {
    this.ui.hideModal();
  }
}
