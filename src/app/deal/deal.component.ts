import { Component, OnInit } from '@angular/core';
import { Deal } from '../model/Deal';
import {DataService} from '../data.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  deals: Array<Deal>;
  selectedDeal: Deal;
  action: string;

  constructor(private dataService: DataService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getDeals().subscribe(next => this.deals = next);

    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.selectedDeal = this.deals.find(d => d.id === +id);
        this.action = params['action'];
      }
    })
  }

  viewDeal(id: number) {
    this.router.navigate([''], {
      queryParams: { id: id, action: 'view' },
    });
  }

  addDeal() {
    this.selectedDeal = new Deal();
    this.router.navigate([''], {queryParams: {action: 'add'}});
  }

}
