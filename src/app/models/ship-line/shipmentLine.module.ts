import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsModule } from '../item-details/item-details.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ShipLineModule {
  Quantity:number=0;
  ShipmentLineKey:string="";
  OrderLine:ItemDetailsModule=new ItemDetailsModule();
  ItemDetails:ItemDetailsModule=new ItemDetailsModule();
  
 }
