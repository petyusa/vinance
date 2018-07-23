import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';

@Injectable()
export class UIService {
  sidenavStateChanged = new Subject<void>();

  constructor(private modalService: ModalService) {}

  toggleSidenav() {
    this.sidenavStateChanged.next();
  }

  showModal(component: any, inputs: object, outputs: object) {
    this.modalService.init(component, inputs, outputs);
  }

  hideModal() {
    this.modalService.destroy();
  }
}
