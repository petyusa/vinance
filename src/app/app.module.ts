import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomService } from './services/dom.service';
import { environment } from '../environments/environment';
import { HeaderComponent } from './navigation/header/header.component';
import { ModalService } from './services/modal.service';
import { NewCostComponent } from './transactions/costs/new-cost/new-cost.component';
import { NewIncomeComponent } from './transactions/incomes/new-income/new-income.component';
import { NewTransferComponent } from './transactions/transfers/new-transfer/new-transfer.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { UIService } from './services/ui.service';
import { TransactionService } from './services/transaction.service';
import { IncomeListComponent } from './transactions/incomes/income-list/income-list.component';
import { ForintPipe } from './pipes/forint.pipe';
import { CostListComponent } from './transactions/costs/cost-list/cost-list.component';
import { TransferListComponent } from './transactions/transfers/transfer-list/transfer-list.component';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { IncomeService } from './services/income.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    NewIncomeComponent,
    NewCostComponent,
    NewTransferComponent,
    IncomeListComponent,
    ForintPipe,
    CostListComponent,
    TransferListComponent
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    TransactionService,
    UIService,
    ModalService,
    DomService,
    AngularFirestore,
    IncomeService
  ],
  entryComponents: [NewIncomeComponent, NewCostComponent, NewTransferComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
