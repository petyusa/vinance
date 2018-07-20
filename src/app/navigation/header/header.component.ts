import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { UIService } from '../../ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private ui: UIService) {}

  sidenavOpen = true;
  sidenaveStateChanged: Subscription;

  ngOnInit(): void {
    this.sidenaveStateChanged = this.ui.sidenavStateChanged.subscribe(() => {
      this.sidenavOpen = !this.sidenavOpen;
    });
  }
  onToggleSidenav() {
    this.ui.toggleSidenav();
  }
}
