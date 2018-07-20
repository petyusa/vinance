import { Component, OnInit } from '@angular/core';
import { UIService } from '../../ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor(private ui: UIService) {}

  stateChanged: Subscription;
  isOpen = true;

  ngOnInit() {
    this.stateChanged = this.ui.sidenavStateChanged.subscribe(() => {
      this.isOpen = !this.isOpen;
    });
  }
}
