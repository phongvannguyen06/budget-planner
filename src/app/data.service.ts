import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vendor } from './model/Vendor';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  vendors: Array<Vendor>;

  getVendors(): Observable<Array<Vendor>> {
    return of(this.vendors);
  }

  constructor() {

    // list of initial vendors
    this.vendors = new Array<Vendor>();
    const vendor1 = new Vendor();
    vendor1.id = 1;
    vendor1.name = 'Microsoft';
    vendor1.description = 'A large technology company specializes in building windows';

    const vendor2 = new Vendor();
    vendor2.id = 2;
    vendor2.name = 'Apple';
    vendor2.description = 'A very large tech company whose sole revenue is from selling Iphones';

    const vendor3 = new Vendor();
    vendor3.id = 3
    vendor3.name = 'Google';
    vendor3.description = 'A very suspicious tech company that tracks all of your data';

    this.vendors.push(vendor1);
    this.vendors.push(vendor2);
    this.vendors.push(vendor3);


  }
}
