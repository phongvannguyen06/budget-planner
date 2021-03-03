import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VendorComponent } from './vendor/vendor.component';
import { DealComponent } from './deal/deal.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailsComponent } from './vendor/vendor-details/vendor-details.component';
import { FormsModule } from '@angular/forms';
import { DealEditComponent } from './deal/deal-edit/deal-edit.component';
import { DealDetailComponent } from './deal/deal-detail/deal-detail.component';

const routes: Routes = [
  { path: 'vendors', component: VendorComponent },
  { path: '', component: DealComponent },
];
@NgModule({
  declarations: [AppComponent, VendorComponent, DealComponent, MenuComponent, VendorEditComponent, VendorDetailsComponent, DealEditComponent, DealDetailComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
