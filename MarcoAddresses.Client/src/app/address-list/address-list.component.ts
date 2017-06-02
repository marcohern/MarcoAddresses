import { Component, OnInit } from '@angular/core';

import { AddressesService } from '../addresses.service';
import { Address } from '../models/address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  private lastEdited:number = -1;
  private addrEdit:Address;
  private addresses:Address[];
  constructor(private as:AddressesService) { }

  ngOnInit() {
    this.as.list().subscribe(data => {
      this.addresses = data;
      this.addresses.forEach(address => {
        address.editing = false;
        address.saving = false;
      })
    });
  }

  editInlineAddress(i) {
    if (this.lastEdited >= 0) {
      this.cancelEditAddress(this.lastEdited);
    }
    this.addrEdit = {
      Id: this.addresses[i].Id,
      Type: this.addresses[i].Type,
      Address1: this.addresses[i].Address1,
      Address2: this.addresses[i].Address2,
      CityId: this.addresses[i].CityId,
      Zip: this.addresses[i].Zip,
      CustomerId: this.addresses[i].CustomerId
    }
    this.addresses[i].editing = true;
    this.lastEdited = i;
  }

  cancelEditAddress(i) {
    this.addresses[i].editing = false;
  }

  saveAddress(i) {
    this.addresses[i].Address1 = this.addrEdit.Address1;
    this.addresses[i].Address2 = this.addrEdit.Address2;
    this.addresses[i].saving = true;
    this.as.update(this.addrEdit, this.addrEdit.Id, false).subscribe(address => {
      this.addresses[i].saving = false;
      this.addresses[i].editing = false
    }, error => {
      this.addresses[i].saving = false;
      this.addresses[i].editing = false
    });
  }

  deleteAddress(i) {
    
    let addr:Address = this.addresses[i];
    if (confirm("Delete this address: " + addr.Address1+ "," + addr.Address2 + ". " + addr.City + "?")) {
      this.as.delete(addr.Id).subscribe(data => {
        console.log("deleteAddress deleted",data);
        this.addresses.splice(i,1);
      });
      
    }
  }

}
