import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Deal } from 'src/app/model/Deal';

@Component({
  selector: 'app-deal-edit',
  templateUrl: './deal-edit.component.html',
  styleUrls: ['./deal-edit.component.css']
})
export class DealEditComponent implements OnInit {

  @Input()
  deal: Deal;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.deal.id == null) {
      this.dataService.addDeal(this.deal).subscribe((deal) =>
        this.router.navigate([''], {
          queryParams: { action: 'view', id: deal.id },
        })
      );
    }
  }

}
