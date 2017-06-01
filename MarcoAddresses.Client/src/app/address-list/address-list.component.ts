import { Component, OnInit } from '@angular/core';

import { AddressesService } from '../addresses.service';
import { Address } from '../models/address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  private addresses:Address[];
  constructor(private as:AddressesService) { }

  ngOnInit() {
    this.as.list().subscribe(data => {
      this.addresses = data;
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
