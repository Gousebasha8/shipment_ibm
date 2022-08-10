import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../custo-info/custo-info.module';
import { ShipmentLinesModule } from '../shipmentLines/shipmentLines.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Shipment{
  AssignedToUserId:number=0;
  DeliveryMethod:string="";
  ExpectedShipmentDate:string="";
  OrderNo:string=""; 
  ScacAndService: string="";
  ShipNode:string="";
  ShipmentKey:string="";
  ShipmentNo: string="";
  Status:string="";
  BillToAddress:Customer=new Customer();
  ToAddress:Customer=new Customer();
  ShipmentLines:ShipmentLinesModule=new ShipmentLinesModule();
  // static Shipment: any;

  // constructor(BillToAddress:CustoInfoModule,ShipmentLines:ShipmentModule)
  //   {
  //       this.BillToAddress=BillToAddress;
  //       this.ShipmentLines=ShipmentLines;
        
  //   }
  //  
    
 }
