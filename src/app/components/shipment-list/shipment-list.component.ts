import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/custo-info/custo-info.module';
import { Shipments} from 'src/app/models/shipments/shipments';
import { Shipment } from 'src/app/models/shipment/shipment.module';
import { ShipmentServicesService } from 'src/app/services/shipment-services.service';


@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.css']
})
export class ShipmentListComponent implements OnInit {



shipmentModule: Shipments = new Shipments();
Shipment: Array<Shipment> = [];
BillToAdress: Customer = new Customer();
ShipmentData: any;






constructor(private http: HttpClient, private shipmentService: ShipmentServicesService) {



  shipmentService.getShipmentResult().subscribe(res => {
    
    console.log("shi", res.Shipment)
    this.shipmentModule = res;
    this.ShipmentData = this.shipmentModule.Shipment;
    // console.log("this",this.ShipmentData.BillToAddress.DayPhone);

    this.shipmentModule.Shipment = [...res.Shipment]



    console.log("carts", this.shipmentModule.Shipment);
    console.log("shipmentmodule", this.shipmentModule);
    //  console.log("ShipmentData-",this.ShipmentData[0].OrderNo)

  });
  

}

ngOnInit(): void {

}
productArray: any;
arrays: any;


tempArray: any = [];
newArray: any = [];
onChange(event: any) {
  // console.log(event.target.checked)
  const value = Object.values(this.ShipmentData);
  if (event.target.checked) {
    let data = value.filter((e: any) => e.Status == event.target.value)
    this.tempArray = data;
    this.productArray = [];
    this.newArray.push(this.tempArray);

    for (let i = 0; i < this.newArray.length; i++) {
      var firstArr = this.newArray[i];
      // console.log("firstArr--",firstArr)
      for (let i = 0; i < firstArr.length; i++) {
        var obj = firstArr[i]
        this.productArray.push(obj)
        console.log("product array--", this.productArray)
      }
    }
    // console.log("Array in Onchange.."+this.arrays)
    // e.OrderNo == event.target.value
    // console.log("value.."+  this.newArray)
  } else {
    this.tempArray = this.productArray.filter((e: any) => e.Status != event.target.value)
    // console.log("tempArray",this.tempArray)
    this.newArray = [];
    this.productArray = [];
    this.newArray.push(this.tempArray);
    // console.log("New Array",this.newArray)
    for (let i = 0; i < this.newArray.length; i++) {
      var firstArr = this.newArray[i];
      // console.log("firstArr--",firstArr)
      for (let i = 0; i < firstArr.length; i++) {
        var obj = firstArr[i]
        this.productArray.push(obj)
        console.log("product array--", this.productArray)
      }
    }


  }
}

}
function AssignedToUserId(AssignedToUserId: any): number {
throw new Error('Function not implemented.');
}

