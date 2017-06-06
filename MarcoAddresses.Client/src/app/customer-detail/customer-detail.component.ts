import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../models/customer';
import { Address } from '../models/address';
import { Option } from '../models/option';
import {MdSnackBar} from '@angular/material';

import { MessagingService } from '../messaging.service';
import { CustomerService } from '../customer.service';
import { AddressesService } from '../addresses.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  private customerForm:FormGroup;
  private addresses:Address[];
  private countries:Option[];
  private states:Option[];
  private cities:Option[];
  private lastEdited:number = -1;
  private addrEdit:Address;
  private editing:boolean = false;
  private loading:boolean = false;
  private customerId?:number = null;

  constructor(
    private fb:FormBuilder,
    private cs:CustomerService,
    private as:AddressesService,
    private router:Router,
    private route:ActivatedRoute,
    private snackBar:MdSnackBar,
    private msg:MessagingService) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      Name: ['',Validators.required],
      Email: ['',[Validators.required, Validators.email]]
    });

    let id = this.route.snapshot.params['id'];
    if (id) {
      this.customerId = id;
      this.editing = true;
      this.cs.get(id).subscribe(data => {
        let c = {
          Name: data.Name,
          Email: data.Email
        }
        this.addresses = data.Addresses;
        
        this.customerForm.setValue(c);
      });
      this.loadCountries();
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

  addAddress() {
    let id = this.route.snapshot.params['id'];
    this.msg.sendDisableCustomerField(id);
    this.router.navigate(['/address/add']);
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

  saveAddress(i) {
    
    this.addresses[i].Type = this.addrEdit.Type;
    this.addresses[i].Address1 = this.addrEdit.Address1;
    this.addresses[i].Address2 = this.addrEdit.Address2;
    this.addresses[i].CustomerId = this.addrEdit.CustomerId;
    this.addresses[i].CityId = this.addrEdit.CityId;
    this.addresses[i].Zip = this.addrEdit.Zip;

    this.addresses[i].Country = this.findCountry(this.addrEdit.CountryId).Name;
    this.addresses[i].State = this.findState(this.addrEdit.StateId).Name;
    this.addresses[i].City = this.findCity(this.addrEdit.CityId).Name;

    this.addresses[i].saving = true;
    this.as.update(this.addrEdit, this.addrEdit.Id, false).subscribe(address => {
      this.addresses[i].saving = false;
      this.addresses[i].editing = false;
      this.snackBar.open("Address saved!");
    }, error => {
      this.addresses[i].saving = false;
      this.addresses[i].editing = false;
      this.snackBar.open("Error while saving address.");
    });
  }

  cancelEditAddress(i) {
    this.addresses[i].editing = false;
    this.snackBar.open("Editing address canceled.");
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
        this.snackBar.open("Address deleted.");
      });
    }
  }
}
