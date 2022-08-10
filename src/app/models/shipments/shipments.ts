import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Shipment } from '../shipment/shipment.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Shipments {
  TotalNumberOfRecords:number=0;
  Shipment:Array<Shipment>[]=[];
  

 }
