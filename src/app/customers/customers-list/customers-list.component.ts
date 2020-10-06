import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/shared/interface';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  filteredCustomers : ICustomer[];
  customerOrderTotal : number;
  currencyCode : string = "INR";

  private _customers;

  constructor() { }

  @Input() get customers()
  {
    return this._customers;
  }

  set customers(value : ICustomer[])
  {
    if(value)
    {
      this.filteredCustomers = this._customers = value;
      this.calculateTotal();
    }
  }

  ngOnInit(): void {
  }

  calculateTotal ()
  {
    this.customerOrderTotal = 0;
    for(let cust of this.filteredCustomers)
    {
      this.customerOrderTotal += cust.orderTotal;
    }
  }

  filter(data : string)
  {
    if(data)
    {
      this.filteredCustomers = this.customers.filter( cust =>{
        return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                cust.orderTotal.toString().indexOf(data) > -1
      })
    }
    else{
      this.filteredCustomers = this.customers;
    }
    this.calculateTotal();
  }

}
