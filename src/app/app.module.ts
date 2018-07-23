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
import { NewCostComponent } from './transactions/new-cost/new-cost.component';
import { NewIncomeComponent } from './transactions/new-income/new-income.component';
import { NewTransferComponent } from './transactions/new-transfer/new-transfer.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { UIService } from './services/ui.service';
import { TransactionService } from './transaction.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    NewIncomeComponent,
    NewCostComponent,
    NewTransferComponent
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [TransactionService, UIService, ModalService, DomService],
  entryComponents: [NewIncomeComponent, NewCostComponent, NewTransferComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
