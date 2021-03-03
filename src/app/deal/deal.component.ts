import { Component, OnInit } from '@angular/core';
import { Deal } from '../model/Deal';
import {DataService} from '../data.service'

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  deals: Array<Deal>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDeals().subscribe(next => this.deals = next);
  }

}
