import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model/Vendor';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
})
export class VendorComponent implements OnInit {
  vendors: Array<Vendor>;
  selectedVendor: Vendor;
  action: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataService.getVendors().subscribe((next) => (this.vendors = next));

    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.selectedVendor = this.vendors.find(vendor => vendor.id === +id);
        this.action = params['action'];
      }

      if (params['action'] === 'add') {
        this.selectedVendor = new Vendor();
      }
    });
  }

  viewVendor(id: number) {
    this.router.navigate(['vendors'], {
      queryParams: { id: id, action: 'view' },
    });
  }

  addVendor() {
    this.selectedVendor = new Vendor();
    this.router.navigate(['vendors'], {queryParams: {action: 'add'}});
  }
}
