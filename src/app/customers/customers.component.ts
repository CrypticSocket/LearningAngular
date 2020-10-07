import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { ICustomer } from '../shared/interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title : string;
  people : ICustomer[]
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.title = "Kevin's Customers";

    this.dataService.getCustomers()
        .subscribe(cust => this.people = cust);
    // this.people = [
    //   {id : 1, name : "Saket vaibhav", city : "Bangalore", orderTotal : 100, customerSince : new Date(2020, 3, 11)},
    //   {id : 2, name : "GauTHam a nAgendrAn", city : "Varkala", orderTotal : 400, customerSince : new Date(2018, 7, 15)},
    //   {id : 3, name : "mAHESH kuRIAKOSE", city : "Bhopal", orderTotal : 900, customerSince : new Date(2001, 5, 10)}
    // ]
  }

}
