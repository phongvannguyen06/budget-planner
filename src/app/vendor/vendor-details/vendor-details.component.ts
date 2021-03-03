import { Component, Input, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/Vendor';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  @Input()
  vendor: Vendor;

  constructor() { }

  ngOnInit(): void {
  }

}
