import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../models/customer';
import { Address } from '../models/address';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  private customerForm:FormGroup;
  private addresses:Address[];
  private editing:boolean = false;
  constructor(
    private fb:FormBuilder,
    private cs:CustomerService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      Name: ['',Validators.required],
      Email: ['',[Validators.required, Validators.email]]
    });

    let id = this.route.snapshot.params['id'];
    if (id) {
      this.editing = true;
      this.cs.get(id).subscribe(data => {
        let c = {
          Name: data.Name,
          Email: data.Email
        }
        this.addresses = data.Addresses;
        
        this.customerForm.setValue(c);
      });
    } 
  }

  saveCustomer(value) {
    let id = this.route.snapshot.params['id'];
    let customer:Customer = {
      Id: id,
      Name: value.Name,
      Email: value.Email
    };

    this.cs.save(customer).subscribe(data => {
      this.router.navigate(['/customers']);
    });
  }
}
