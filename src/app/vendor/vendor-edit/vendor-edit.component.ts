import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Vendor } from 'src/app/model/Vendor';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  @Input()
  vendor: Vendor;

  formVendor: Vendor;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.formVendor = Object.assign({}, this.vendor);
    console.log(this.vendor.id);
  }

  onSubmit() {
    console.log("Hello");
    if (this.vendor.id == null) {
      this.dataService.addVendor(this.vendor).subscribe((vendor) =>
        this.router.navigate(['vendors'], {
          queryParams: { action: 'view', id: vendor.id },
        })
      );
    }
  }



}
