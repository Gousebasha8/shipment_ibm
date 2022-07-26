import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/custo-info/custo-info.module';
import { Shipments} from 'src/app/models/shipments/shipments';
import { ShipmentModule } from 'src/app/models/shipment/shipment.module';
import { ShipmentServicesService } from 'src/app/services/shipment-services.service';


@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.css']
})
export class ShipmentListComponent implements OnInit {
  shipmentModule:Shipments=new Shipments();
   Shipment:Array<ShipmentModule>=[];
  BillToAdress:Customer=new Customer();
    ShipmentData:any;
  // Shipment:ShipmentModule=new ShipmentModule();

  constructor(private http:HttpClient,private shipmentService:ShipmentServicesService) {

    shipmentService.getShipmentResult().subscribe(res=>{
      //  const res1=res.Shipment.map(data=>{
      //   return {
         
          
         
      //     AssignedToUserId:
      //     ,description:data.forEach(data=>{
      //       data['Shipment'].Assigned
      //     }),
      //     images:"assets/"+data.images,
      // type:data.type,cuisine_name:data.cuisine_name,price:data.price,consumable:data.consumable}
      // })
      // this.menuModule=[...res1];
      console.log("shi",res.Shipment)
    this.shipmentModule=res;
    this.ShipmentData=this.shipmentModule.Shipment;
    // console.log("this",this.ShipmentData.BillToAddress.DayPhone);
    
        this.shipmentModule.Shipment=[...res.Shipment]

        

     
        console.log("carts",this.shipmentModule.Shipment);
        console.log("shipmentmodule",this.shipmentModule);
        
        
     })
   }

  ngOnInit(): void {
  }

}
function AssignedToUserId(AssignedToUserId: any): number {
  throw new Error('Function not implemented.');
}

