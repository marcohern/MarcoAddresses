import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RequestService } from './request.service';
import { AddressesService } from './addresses.service';
import { CustomerService } from './customer.service';

import {
  MdMenuModule,
  MdIconModule,
  MdGridListModule,
  MdToolbarModule,
  MdSidenavModule,
  MdListModule,
  MdButtonModule,
  MdCardModule,
  MdProgressBarModule,
  MdDialogModule,
  MdInputModule,
  MdSelectModule,
  MdSnackBarModule
} from '@angular/material';
import 'hammerjs';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { AboutComponent } from './about/about.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AddressListComponent,
    AddressDetailComponent,
    AboutComponent,
    CustomerListComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutes,

    MdMenuModule,
    MdIconModule,
    MdGridListModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdButtonModule,
    MdCardModule,
    MdProgressBarModule,
    MdDialogModule,
    MdInputModule,
    MdSelectModule,
    MdSnackBarModule
  ],
  providers: [RequestService,AddressesService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
