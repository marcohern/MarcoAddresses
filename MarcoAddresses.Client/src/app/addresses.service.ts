import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { RequestService } from './request.service';
import { Address } from './models/address';
import { Option } from './models/option';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class AddressesService {

  constructor(private rs:RequestService) { }

  list(): Observable<Address[]> {
    return this.rs.query('/Addresses')
      .map((r:Response) => <Address[]>r.json());
  }

  get(id:number): Observable<Address> {
    return this.rs.get('/Addresses', id)
      .map((r:Response) => <Address>r.json());
  }

  delete(id:number): Observable<Address> {
    return this.rs.delete('/Addresses', id)
      .map((r:Response) => <Address>r.json());
  }

  save(address:Address, loadscreen:boolean = true): Observable<Address> {
    return this.rs.save('/Addresses', address, loadscreen)
      .map((r:Response) => <Address>r.json());
  }

  update(address:Address, id:number, loadscreen:boolean = true): Observable<Address> {
    return this.rs.update('/Addresses', address, id, loadscreen)
      .map((r:Response) => <Address>r.json());
  }

  countryOptions(): Observable<Option[]> {
    return this.rs.get('/CountryOptions',null)
      .map((r:Response) => <Option[]>r.json());
  }

  stateOptions(countryId): Observable<Option[]> {
    return this.rs.get('/StateOptions',countryId)
      .map((r:Response) => <Option[]>r.json());
  }

  cityOptions(stateId): Observable<Option[]> {
    return this.rs.get('/CityOptions',stateId)
      .map((r:Response) => <Option[]>r.json());
  }

  customerOptions(): Observable<Option[]> {
    return this.rs.get('/CustomerOptions', null)
      .map((r:Response) => <Option[]>r.json());
  }
}
