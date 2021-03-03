import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/model/Vendor';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css'],
})
export class VendorDetailsComponent implements OnInit {
  @Input()
  vendor: Vendor;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  editVendor() {
    this.router.navigate(['vendors'], {
      queryParams: { action: 'edit', id: this.vendor.id },
    });
  }
}
