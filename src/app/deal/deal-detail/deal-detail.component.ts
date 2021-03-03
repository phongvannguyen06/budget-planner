import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Deal } from 'src/app/model/Deal';

@Component({
  selector: 'app-deal-detail',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.css'],
})
export class DealDetailComponent implements OnInit {
  @Input()
  deal: Deal;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {}

  deleteDeal() {
    this.dataService
      .deleteDeal(this.deal.id)
      .subscribe((next) => this.router.navigate(['']));
  }

  editDeal() {
    this.router.navigate([''], {
      queryParams: { action: 'edit', id: this.deal.id },
    });
  }
}
