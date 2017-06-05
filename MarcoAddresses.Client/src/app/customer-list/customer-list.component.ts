import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';

import { Customer } from '../models/customer';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers:Customer[];
  custEdit:Customer;
  lastEdit:number = -1;

  constructor(private cs:CustomerService, private snackBar:MdSnackBar) { }

  ngOnInit() {
    this.cs.list().subscribe(customers => {
      this.customers = customers;
      this.customers.forEach(customer => customer.editing = false);
    });
  }

  editInlineCustomer(i) {
    if (this.lastEdit >= 0) {
      this.customers[this.lastEdit].editing = false;
    }
    this.custEdit = {
      Id: this.customers[i].Id,
      Name: this.customers[i].Name,
      Email: this.customers[i].Email
    }
    this.customers[i].editing = true;
    this.lastEdit = i;
  }

  cancelSaveCustomer(i) {
    this.customers[i].editing = false;
    this.snackBar.open("Editing customer canceled.");
  }

  deleteCustomer(i) {
    let id = this.customers[i].Id;
    if (confirm("Delete Customer and all of it's addresses?")) {
      this.cs.delete(id).subscribe(data => {
      this.customers.splice(i,1);
      this.snackBar.open("Customer '" + data.Name + "' deleted");
    });
    }
  }

  saveCustomer(i) {
    this.customers[i].Name = this.custEdit.Name;
    this.customers[i].Email = this.custEdit.Email;

    this.cs.save(this.custEdit).subscribe(customer => {
      this.customers[i].editing = false;
      this.snackBar.open("Customer saved!");
    }, error => {
      this.snackBar.open("Error saving gustomer!");
    })
  }
}
