import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipLineModule } from '../ship-line/shipmentLine.module';
// import { ShipLineModule } from '../ship-line/shipmentLine.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ShipmentLinesModule { 
  TotalNumberOfRecords:number=0;
  ShipmentLine:ShipLineModule[]=[];
}
