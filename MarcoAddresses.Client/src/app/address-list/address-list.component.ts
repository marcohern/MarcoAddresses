import { Component, OnInit } from '@angular/core';

import { AddressesService } from '../addresses.service';
import { Address } from '../models/address';
import { Option } from '../models/option';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  private lastEdited:number = -1;
  private addrEdit:Address;
  private addresses:Address[];
  private customers:Option[];
  private countries:Option[];
  private states:Option[];
  private cities:Option[];
  private loading:boolean=false;
  constructor(private as:AddressesService) { }

  ngOnInit() {
    this.as.list().subscribe(data => {
      this.addresses = data;
      this.addresses.forEach(address => {
        address.editing = false;
        address.saving = false;
      })
    });
    this.loading = true;
    this.as.customerOptions().subscribe(customers => this.customers = customers);
    this.loadCountries();
    this.loading = false;
  }

  editInlineAddress(i) {
    if (this.lastEdited >= 0) {
      this.cancelEditAddress(this.lastEdited);
    }
    console.log("editInlineAddress",i,this.addresses[i]);
    this.addrEdit = {
      Id: this.addresses[i].Id,
      Type: this.addresses[i].Type,
      Address1: this.addresses[i].Address1,
      Address2: this.addresses[i].Address2,
      CountryId: this.addresses[i].CountryId,
      StateId: this.addresses[i].StateId,
      CityId: this.addresses[i].CityId,
      Zip: this.addresses[i].Zip,
      CustomerId: this.addresses[i].CustomerId
    }
    this.loading = true;
    this.loadStates(this.addrEdit.CountryId);
    this.loadCities(this.addrEdit.StateId);
    this.addresses[i].editing = true;
    this.lastEdited = i;
    this.loading = false;
  }

  cancelEditAddress(i) {
    this.addresses[i].editing = false;
  }

  findCountry(countryId):Option {
    for (let i=0;i<this.countries.length;i++) {
      if (this.countries[i].Id == countryId) return this.countries[i];
    }
    return null;
  }

  findState(stateId):Option {
    for (let i=0;i<this.states.length;i++) {
      if (this.states[i].Id == stateId) return this.states[i];
    }
    return null;
  }

  findCity(cityId):Option {
    for (let i=0;i<this.cities.length;i++) {
      if (this.cities[i].Id == cityId) return this.cities[i];
    }
    return null;
  }

  findCustomer(customerId):Option {
    for (let i=0;i<this.customers.length;i++) {
      if (this.customers[i].Id == customerId) return this.customers[i];
    }
    return null;
  }

  saveAddress(i) {
    
    this.addresses[i].Type = this.addrEdit.Type;
    this.addresses[i].Address1 = this.addrEdit.Address1;
    this.addresses[i].Address2 = this.addrEdit.Address2;
    this.addresses[i].CustomerId = this.addrEdit.CustomerId;
    this.addresses[i].CityId = this.addrEdit.CityId;
    this.addresses[i].Zip = this.addrEdit.Zip;

    this.addresses[i].Customer = this.findCustomer(this.addrEdit.CustomerId).Name;
    this.addresses[i].Country = this.findCountry(this.addrEdit.CountryId).Name;
    this.addresses[i].State = this.findState(this.addrEdit.StateId).Name;
    this.addresses[i].City = this.findCity(this.addrEdit.CityId).Name;

    this.addresses[i].saving = true;
    this.as.update(this.addrEdit, this.addrEdit.Id, false).subscribe(address => {
      this.addresses[i].saving = false;
      this.addresses[i].editing = false
    }, error => {
      this.addresses[i].saving = false;
      this.addresses[i].editing = false
    });
  }

  loadCountries() {
    this.as.countryOptions().subscribe(countries => this.countries = countries);
  }

  onChangeCountry() {
    if (!this.loading) {
      this.addrEdit.StateId = 0;
      this.addrEdit.CityId = 0;  
    };
    this.loadStates(this.addrEdit.CountryId);
  }

  loadStates(countryId) {
    this.as.stateOptions(countryId).subscribe(states => {
      console.log("loadStates response", countryId, states);
      this.states = states;
    });
  }

  onChangeState() {
    if (!this.loading) {
      this.addrEdit.CityId = 0;
    }
    this.loadCities(this.addrEdit.StateId);
  }

  loadCities(stateId) {
    this.as.cityOptions(stateId).subscribe(cities => {
      console.log("loadCities response", stateId, cities);
      this.cities = cities;
    });
  }

  deleteAddress(i) {
    let addr:Address = this.addresses[i];
    if (confirm("Delete this address: " + addr.Address1+ "," + addr.Address2 + ". " + addr.City + "?")) {
      this.as.delete(addr.Id).subscribe(data => {
        this.addresses.splice(i,1);
      });
    }
  }

}
