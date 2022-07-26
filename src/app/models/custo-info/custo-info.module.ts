import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Customer {

  DayPhone:number=0 ;
  EMailID: string="";
  FirstName:string="";
  LastName: string="";
  PersonInfoKey:string="";
  Phonenumber: string="";
  AddressID:string="";
  AddressLine1: string="";
  AddressLine2: string="";
    City: string="";
    Country:string="";
    State:string="";
    ZipCode:string="";
 }
