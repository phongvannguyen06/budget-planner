import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vendor } from './model/Vendor';
import { Deal } from './model/Deal';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  vendors: Array<Vendor>;
  deals: Array<Deal>;

  getVendors(): Observable<Array<Vendor>> {
    return of(this.vendors);
  }

  getDeals(): Observable<Array<Deal>> {
    return of(this.deals);
  }

  deleteVendor(id: number): Observable<any> {
    const vendor = this.vendors.find((v) => v.id === id);
    this.vendors.splice(this.vendors.indexOf(vendor), 1);
    return of(null);
  }

  addVendor(newVendor: Vendor): Observable<Vendor> {
    let id = 0;
    for (const vendor of this.vendors) {
      if (vendor.id > id) {
        id = vendor.id;
      }
    }

    newVendor.id = id + 1;
    this.vendors.push(newVendor);
    return of(newVendor);
  }

  deleteDeal(id: number): Observable<any> {
    const deal = this.deals.find((d) => d.id === id);
    this.deals.splice(this.deals.indexOf(deal), 1);
    return of(null);
  }

  addDeal(newDeal: Deal): Observable<Deal> {
    let id = 0;
    for (const deal of this.deals) {
      if (deal.id > id) {
        id = deal.id;
      }
    }

    newDeal.id = id + 1;
    this.deals.push(newDeal);
    return of(newDeal);
  }

  constructor() {
    // list of sample vendors
    this.vendors = new Array<Vendor>();
    const vendor1 = new Vendor();
    vendor1.id = 1;
    vendor1.name = 'Microsoft';
    vendor1.description =
      'A large technology company specializes in building windows';

    const vendor2 = new Vendor();
    vendor2.id = 2;
    vendor2.name = 'Apple';
    vendor2.description =
      'A very large tech company whose sole revenue is from selling Iphones';

    const vendor3 = new Vendor();
    vendor3.id = 3;
    vendor3.name = 'Google';
    vendor3.description =
      'A very suspicious tech company that tracks all of your data';

    this.vendors.push(vendor1);
    this.vendors.push(vendor2);
    this.vendors.push(vendor3);

    // list of sample deals
    this.deals = new Array<Deal>();
    const deal1 = new Deal();
    deal1.id = 1;
    deal1.name = 'Apollo Project';
    deal1.vendor = vendor1;
    deal1.cost = 1111;

    const deal2 = new Deal();
    deal2.id = 2;
    deal2.name = 'Hermes Project';
    deal2.vendor = vendor2;
    deal2.cost = 2222;

    const deal3 = new Deal();
    deal3.id = 3;
    deal3.name = 'Zeus Project';
    deal3.vendor = vendor3;
    deal3.cost = 3333;

    this.deals.push(deal1);
    this.deals.push(deal2);
    this.deals.push(deal3);
  }
}
