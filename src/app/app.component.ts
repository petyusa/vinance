import { Component, OnInit } from '@angular/core';
import { UIService } from './ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private ui: UIService) {}

  stateChanged: Subscription;
  isSidenavOpen = true;

  ngOnInit() {
    this.stateChanged = this.ui.sidenavStateChanged.subscribe(() => {
      this.isSidenavOpen = !this.isSidenavOpen;
    });
  }
}
