import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ Customer} from 'src/app/models/custo-info/custo-info.module'
import { ShipLineModule } from 'src/app/models/ship-line/shipmentLine.module';
// import { ShipLineModule } from 'src/app/models/ship-line/shipmentLine.module';
import { Shipment } from 'src/app/models/shipment/shipment.module';
import { ShipmentLinesModule } from 'src/app/models/shipmentLines/shipmentLines.module';
import { ShipmentSummaryService } from 'src/app/services/shipment-summary.service';

@Component({
  selector: 'app-shipment-summary',
  templateUrl: './shipment-summary.component.html',
  styleUrls: ['./shipment-summary.component.css']
})
export class ShipmentSummaryComponent implements OnInit {
  Shipment:Shipment=new Shipment();
  BillToAddress:Customer=new Customer();
  ShipLine:Array<ShipLineModule>=[];
  ShipLines:ShipmentLinesModule=new ShipmentLinesModule();
  shipmentId:any;
  ShipmentSummaryData:any;

  constructor(private activateRoute:ActivatedRoute,private shipmentSmryService:ShipmentSummaryService) {
    
      shipmentSmryService.getShipmentResult().subscribe(res=>{
        if(this.shipmentId===res.ShipmentNo){
          this.Shipment=res;
         
          console.log("hiiii inside ifs");
          this.ShipmentSummaryData=res;
          this.ShipmentSummaryData.ShipmentLines.ShipmentLine=[...res.ShipmentLines.ShipmentLine]
          this.Shipment.ShipmentLines.ShipmentLine=[...res.ShipmentLines.ShipmentLine]
          console.log("gggg",this.ShipmentSummaryData.ShipmentLines.ShipmentLine);
          
          
        }
        console.log("shi",this.Shipment.BillToAddress.AddressID);
        
        

        // this.ShipmentSummaryData=res;

        console.log("res",this.ShipmentSummaryData);
      

    })
  }
    //   this.Shipment=res;

    
    //   console.log("shipni",res.ShipmentNo);
      
    //   this.Shipment.ShipmentLines.ShipmentLine=[...res.ShipmentLines.ShipmentLine]
      
    //   console.log("shipment",this.Shipment);
    // })
    // // console.log("shipment",this.Shipment);
    // console.log("shipmentLine",this.Shipment.ShipmentLines.ShipmentLine);
    
    


  ngOnInit(): void {

    if(this.activateRoute.snapshot.paramMap.has('id')){
       this.shipmentId= this.activateRoute.snapshot.paramMap.get('id')!;
      console.log("ifcsid",this.shipmentId);
      // console.log("hi",this.activateRoute.snapshot.paramMap.get('id')!);
      
      
    }
    
    // console.log("not ifcsid",this.categoryId);
    // this.categoryService.getProductByCategory(this.categoryId).subscribe(data=>{
    //   this.cat=data;
    //   console.log("datttta",data);
    //   this.product=[...data.products];
     
    
      
    // })
    // console.log("this.product",this.product);
    
    // console.log("this.product",this.cat.products);
    
   
  }

  

}
