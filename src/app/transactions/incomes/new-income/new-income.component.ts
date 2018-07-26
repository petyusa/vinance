import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Income } from '../../../models/income';
import { UIService } from '../../../services/ui.service';
import { IncomeService } from '../../../services/income.service';

@Component({
  selector: 'app-new-income',
  templateUrl: './new-income.component.html',
  styleUrls: ['./new-income.component.scss']
})
export class NewIncomeComponent implements OnInit {
  @Input() id = '';
  incomeForm: FormGroup;
  constructor(private ui: UIService, private is: IncomeService) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmitIncome() {
    const values = this.incomeForm.value;
    const income = new Income(
      values.id,
      new Date(values.date),
      values.amount,
      values.comment,
      values.to,
      values.category
    );
    if (this.id !== '') {
      this.is.editIncome(income);
    } else {
      this.is.addIncome(income);
    }
    this.ui.hideModal();
  }

  private initForm() {
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
      this.is.getIncome(this.id).subscribe((income) => {
        console.log(income.date);
        this.incomeForm.setValue({
          id: income.id,
          date: new Date(income.date.toDate()).toISOString().substring(0, 10),
          to: income.to,
          amount: income.amount,
          category: income.category,
          comment: income.comment
        });
      });
    }
  }
}
