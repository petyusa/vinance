import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TransactionService } from './transaction.service';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { UIService } from './ui.service';
import { NewIncomeComponent } from './transactions/new-income/new-income.component';
import { NewCostComponent } from './transactions/new-cost/new-cost.component';
import { NewTransferComponent } from './transactions/new-transfer/new-transfer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidenavComponent, NewIncomeComponent, NewCostComponent, NewTransferComponent],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [TransactionService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
