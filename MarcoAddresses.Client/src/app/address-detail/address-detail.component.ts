import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Address } from '../models/address';
import { Option } from '../models/option';

import { AddressesService } from '../addresses.service'

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {

  addressForm:FormGroup;
  countries:Option[];
  states:Option[];
  cities:Option[];
  loadingCountries:boolean = false;
  loadingStates:boolean = false;
  loadingCities:boolean = false;
  clearValues:boolean = true;

  constructor(
    private fb:FormBuilder,
    private as:AddressesService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    
    this.addressForm = this.fb.group({
      Type: ['', Validators.required],
      Address1: ['', Validators.required],
      Address2: ['', Validators.required],
      CountryId: ['', Validators.required],
      StateId: ['', Validators.required],
      CityId: ['', Validators.required],
      Zip: ['',Validators.required]
    });

    this.getCountries();
    
    let id = this.route.snapshot.params['id'];
    if (id) {
      this.clearValues = false;
      this.as.get(id).subscribe(address => {
        this.addressForm.setValue({
          Type: address.Type,
          Address1: address.Address1,
          Address2: address.Address2,
          CountryId: address.CountryId,
          StateId: address.StateId,
          CityId: address.CityId,
          Zip: address.Zip
        });
        this.getStates(address.CountryId);
        this.getCities(address.StateId);
        this.clearValues = true;
      });
    }
  }

  getCountries() {
    this.loadingCountries = true;
    if (this.clearValues) {
      this.addressForm.controls.CountryId.setValue('');
      this.addressForm.controls.StateId.setValue('');
      this.addressForm.controls.CityId.setValue('');
    }
    this.as.countryOptions().subscribe(countries => this.getCountriesDone(countries));
  }

  getCountriesDone(countries) {
    this.countries = countries;
    this.loadingCountries = false;
  }

  getStates(countryId) {
    this.loadingStates = true;
    if (this.clearValues) {
      this.addressForm.controls.StateId.setValue('');
      this.addressForm.controls.CityId.setValue('');
    }
    this.as.stateOptions(countryId).subscribe(states => this.getStatesDone(states));
  }

  getStatesDone(states) {
    this.states = states;
    this.loadingStates = false;
  }

  getCities(stateId) {
    this.loadingCities = true;
    if (this.clearValues) {
      this.addressForm.controls.StateId.setValue('');
    }
    this.as.cityOptions(stateId).subscribe(cities => this.cities = cities);
  }

  getCitiesDone(cities) {
    this.cities = cities;
    this.loadingCities = false;
  }

  saveAddress(values) {
    let id = this.route.snapshot.params['id'];
    let address:Address = {
      Id: id,
      Type: values.Type,
      Address1: values.Address1,
      Address2: values.Address2,
      CityId: values.CityId,
      Zip: values.Zip
    };

    this.as.save(address).subscribe(result => {
      this.router.navigate(['/addresses']);
    });
  }

}
