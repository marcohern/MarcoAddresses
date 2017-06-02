export interface Address {
    Id?:number;
    Type:string;
    Address1:string;
    Address2:string;
    CustomerId:number;
    CityId:number;
    Zip:number;

    CountryId?:number;
    StateId?:number;
    City?:string;
    State?:string;
    Country?:string;
    Continent?:string;

    editing?:boolean;
    saving?:boolean;
}
