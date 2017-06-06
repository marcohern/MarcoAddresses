import { Address } from './address';

export interface Customer {
    Id?:number;
    Name:string;
    Email:string;

    editing?:boolean;

    Addresses?:Address[];
}
