import { Injectable } from '@angular/core';
import { Request } from '@angular/http';

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
      .map((r:Request) => <Address[]>r.json());
  }

  get(id:number): Observable<Address> {
    return this.rs.get('/Addresses', id)
      .map((r:Request) => <Address>r.json());
  }

  delete(id:number): Observable<Address> {
    return this.rs.delete('/Addresses', id)
      .map((r:Request) => <Address>r.json());
  }

  save(address:Address): Observable<Address> {
    return this.rs.save('/Addresses', address)
      .map((r:Request) => <Address>r.json());
  }

  countryOptions(): Observable<Option[]> {
    return this.rs.get('/CountryOptions',null)
      .map((r:Request) => <Option[]>r.json());
  }

  stateOptions(countryId): Observable<Option[]> {
    return this.rs.get('/StateOptions',countryId)
      .map((r:Request) => <Option[]>r.json());
  }

  cityOptions(stateId): Observable<Option[]> {
    return this.rs.get('/CityOptions',stateId)
      .map((r:Request) => <Option[]>r.json());
  }
}
