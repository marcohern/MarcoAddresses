import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../models/address';

@Component({
  selector: 'app-address-inline',
  templateUrl: './address-inline.component.html',
  styleUrls: ['./address-inline.component.css']
})
export class AddressInlineComponent implements OnInit {

  @Input()
  address:Address;

  @Input()
  i:number;
  
  constructor() { }

  ngOnInit() {
  }

}
