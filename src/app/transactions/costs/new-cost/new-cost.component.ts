import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Cost } from '../../../models/models';
import { UIService } from '../../../services/ui.service';
import { CostService } from '../../../services/cost.service';

@Component({
  selector: 'app-new-cost',
  templateUrl: './new-cost.component.html',
  styleUrls: ['./new-cost.component.scss']
})
export class NewCostComponent implements OnInit {
  @Input() id = '';
  costForm: FormGroup;
  constructor(private cs: CostService, private ui: UIService) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const values = this.costForm.value;
    const cost = new Cost(
      values.id,
      new Date(values.date),
      values.amount,
      values.comment,
      values.from,
      values.category
    );
    if (this.id !== '') {
      this.cs.edit(cost);
    } else {
      this.cs.add(cost);
    }
    this.ui.hideModal();
  }

  private initForm() {
    const today = new Date().toISOString().substring(0, 10);
    this.costForm = new FormGroup({
      id: new FormControl(''),
      date: new FormControl(today, [Validators.required]),
      from: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.min(1)]),
      category: new FormControl('', Validators.required),
      comment: new FormControl('')
    });
    if (this.id !== '') {
      this.cs.get(this.id).subscribe((cost) => {
        this.costForm.setValue({
          id: cost.id,
          date: new Date(cost.date.toDate()).toISOString().substring(0, 10),
          from: cost.from,
          amount: cost.amount,
          category: cost.category,
          comment: cost.comment
        });
      });
    }
  }
}
