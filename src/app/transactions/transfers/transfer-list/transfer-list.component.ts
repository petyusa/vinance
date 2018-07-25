import { Component, OnInit } from '@angular/core';
import { Transfer } from '../../../models/models';
import { Subscription } from 'rxjs';
import { TransactionService } from '../../../transaction.service';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss']
})
export class TransferListComponent implements OnInit {
  transfers: Transfer[] = [];
  transfersChanged: Subscription;

  constructor(private ts: TransactionService) {}

  ngOnInit() {
    this.transfers = this.ts.getTransfers();
    this.transfersChanged = this.ts.transfersChanged.subscribe((transfers) => {
      this.transfers = transfers;
    });
  }
}