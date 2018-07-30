import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { NewAccountComponent } from '../accounts/new-account/new-account.component';
import { UIService } from '../services/ui.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor(private accSer: AccountService) {}

  ngOnInit() {}
}
