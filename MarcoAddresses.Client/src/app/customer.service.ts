import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { RequestService } from './request.service';
import { Customer } from './models/customer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Injectable()
export class CustomerService {

  constructor(private rs:RequestService) { }

  list(): Observable<Customer[]> {
    return this.rs.query('/Customers')
      .map((r:Response) => <Customer[]>r.json());
  }

  get(id:number): Observable<Customer> {
    return this.rs.get('/Customers', id)
      .map((r:Response) => <Customer>r.json());
  }

  save(customer:Customer): Observable<Customer> {
    return this.rs.save('/Customers', customer)
      .map((r:Response) => <Customer>r.json());
  }

  update(id:number, customer:Customer):Observable<Customer> {
    return this.rs.update('/Customers', customer, id)
      .map((r:Response) => <Customer>r.json());
  }

  delete(id:number):Observable<Customer> {
    return this.rs.delete('/Customers', id)
      .map((r:Response) => <Customer>r.json());
  }
}
