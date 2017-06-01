import { NgModule                 } from '@angular/core';
import { RouterModule, Routes     } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';

const routes: Routes = [
    { path: 'welcome'         , component: WelcomeComponent },
    { path: 'addresses'       , component: AddressListComponent },
    { path: 'address/add'     , component: AddressDetailComponent },
    { path: 'address/:id'     , component: AddressDetailComponent },
    { path: ''  , redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutes {

}