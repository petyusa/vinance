import { Component, OnInit } from '@angular/core';

import { Transfer } from '../../../models/models';
import { TransferService } from '../../../services/transfer.service';
import { UIService } from '../../../services/ui.service';
import { NewTransferComponent } from '../new-transfer/new-transfer.component';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss']
})
export class TransferListComponent implements OnInit {
  transfers: Transfer[];
  isLoading = true;

  constructor(private ts: TransferService, private ui: UIService) {}

  ngOnInit() {
    this.ts.transfers.subscribe((items) => {
      items.forEach((item) => {
        item.date = new Date(item.date);
      });
      this.transfers = items;
      this.isLoading = false;
    });
  }

  onEdit(id: string) {
    this.ui.showModal(NewTransferComponent, { id }, {});
  }

  onDelete(id: string) {
    this.ts.delete(id);
  }
}
