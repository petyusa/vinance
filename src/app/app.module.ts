import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, AngularFireModule.initializeApp(environment.firebase), BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
