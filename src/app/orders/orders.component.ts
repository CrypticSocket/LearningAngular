import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/data.service';
import { ICustomer, IOrder } from '../shared/interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  customer : ICustomer;
  orders : IOrder[] = [];

  constructor(private dataService : DataService, private routes : ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.routes.snapshot.paramMap.get('id')

    this.dataService.getOrder(id).subscribe((orders : IOrder[]) => {
      this.orders = orders;
    })

    this.dataService.getCustomer(id).subscribe((customer : ICustomer) => {
      this.customer = customer
    })
  }

}
