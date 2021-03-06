import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { FormsModule } from '@angular/forms';
import { CustomersRoutingModule } from "./customers-routing.module"



@NgModule({
  declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule
  ],
  exports: [CustomersComponent]
})
export class CustomersModule { }
