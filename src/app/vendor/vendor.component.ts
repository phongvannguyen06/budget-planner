import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model/Vendor';
import {DataService} from '../data.service'
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendors: Array<Vendor>

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getVendors().subscribe(next => this.vendors = next);
  }

}
