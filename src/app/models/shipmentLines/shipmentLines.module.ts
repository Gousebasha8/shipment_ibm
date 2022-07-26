import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipLineModule } from '../ship-line/ship-line.module';



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
