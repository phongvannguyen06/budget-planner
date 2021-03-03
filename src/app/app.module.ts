import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VendorComponent } from './vendor/vendor.component';
import { DealComponent } from './deal/deal.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'vendors', component: VendorComponent },
  { path: '', component: DealComponent },
];
@NgModule({
  declarations: [AppComponent, VendorComponent, DealComponent, MenuComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
