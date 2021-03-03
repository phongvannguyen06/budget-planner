import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VendorComponent } from './vendor/vendor.component';
import { DealComponent } from './deal/deal.component';

@NgModule({
  declarations: [
    AppComponent,
    VendorComponent,
    DealComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
