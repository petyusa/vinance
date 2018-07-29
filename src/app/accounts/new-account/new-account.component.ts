import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AccountService } from '../../services/account.service';
import { Account } from '../../models/models';
import { UIService } from '../../services/ui.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  @Input() id = '';
  accountForm: FormGroup;

  constructor(private as: AccountService, private ui: UIService) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const values = this.accountForm.value;
    const acc = new Account(values.id, values.name, values.isSaving);
    this.as.add(acc);
    this.ui.hideModal();
  }

  private initForm() {
    this.accountForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      isSaving: new FormControl(false, Validators.required)
    });
  }
}
