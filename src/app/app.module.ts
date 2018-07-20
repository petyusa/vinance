import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TransactionService } from './transaction.service';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidenavComponent],
  imports: [AppRoutingModule, AngularFireModule.initializeApp(environment.firebase), BrowserModule],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
