import { Subject } from '../../node_modules/rxjs';
import { Injectable } from '../../node_modules/@angular/core';

@Injectable()
export class UIService {
  sidenavStateChanged = new Subject<void>();

  toggleSidenav() {
    this.sidenavStateChanged.next();
  }
}
