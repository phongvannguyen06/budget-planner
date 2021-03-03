import { Component, Input, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/Vendor';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  @Input()
  vendor: Vendor;

  constructor() { }

  ngOnInit(): void {
  }



}
