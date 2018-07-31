import { AngularFireModule } from 'angularfire2';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AccountListComponent } from './accounts/account-list/account-list.component';
import { AppComponent } from './app.component';
import { CostListComponent } from './transactions/costs/cost-list/cost-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { IncomeListComponent } from './transactions/incomes/income-list/income-list.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { NewCostComponent } from './transactions/costs/new-cost/new-cost.component';
import { NewIncomeComponent } from './transactions/incomes/new-income/new-income.component';
import { NewTransferComponent } from './transactions/transfers/new-transfer/new-transfer.component';
import { SettingsComponent } from './settings/settings.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { TransferListComponent } from './transactions/transfers/transfer-list/transfer-list.component';

import { DomService } from './services/dom.service';
import { IncomeService } from './services/income.service';
import { IncomeCategoryService } from './services/income-category.service';
import { ModalService } from './services/modal.service';
import { TransferService } from './services/transfer.service';
import { UIService } from './services/ui.service';

import { ForintPipe } from './pipes/forint.pipe';

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
    TransferListComponent,
    AccountListComponent,
    NewAccountComponent,
    SettingsComponent
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    UIService,
    ModalService,
    DomService,
    AngularFirestore,
    IncomeService,
    TransferService,
    IncomeCategoryService
  ],
  entryComponents: [
    NewIncomeComponent,
    NewCostComponent,
    NewTransferComponent,
    NewAccountComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
