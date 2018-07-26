import { Component, OnInit } from '@angular/core';
import { Income } from '../../../models/models';
import { Observable } from 'rxjs';
import { IncomeService } from '../../../services/income.service';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {
  incomes: Income[];

  constructor(private is: IncomeService) {}

  ngOnInit() {
    this.is.items.subscribe((items) => {
      this.incomes = items;
      console.log(this.incomes);
    });
  }

  onEdit() {}

  onDelete() {}
}
