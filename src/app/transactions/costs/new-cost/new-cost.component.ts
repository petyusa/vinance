import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cost } from '../../../models/models';

@Component({
  selector: 'app-new-cost',
  templateUrl: './new-cost.component.html',
  styleUrls: ['./new-cost.component.scss']
})
export class NewCostComponent implements OnInit {
  costForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.costForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
      accountFrom: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.min(1)]),
      category: new FormControl('', Validators.required),
      comment: new FormControl('')
    });
  }

  onAddIncome() {
    const values = this.costForm.value;
    const cost = new Cost(
      values.date,
      values.amount,
      values.comment,
      values.accountFrom,
      values.category
    );
    console.log(this.costForm);
  }
}
