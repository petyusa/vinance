import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CostCategory } from '../../models/costCategory';
import { CostCategoryService } from '../../services/cost-category.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-new-cost-category',
  templateUrl: './new-cost-category.component.html',
  styleUrls: ['./new-cost-category.component.scss']
})
export class NewCostCategoryComponent implements OnInit {
  coCaForm: FormGroup;
  constructor(private cocaSer: CostCategoryService, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const values = this.coCaForm.value;
    const coca = new CostCategory(
      values.id,
      values.name,
      values.color,
      values.balance
    );
    this.cocaSer.add(coca);
    this.router.navigate(['/costs']);
  }

  private initForm() {
    this.coCaForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      balance: new FormControl(0, Validators.required)
    });
  }
}
