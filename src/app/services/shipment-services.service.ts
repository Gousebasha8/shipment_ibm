import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipments } from '../models/shipments/shipments';

@Injectable({
  providedIn: 'root'
})
export class ShipmentServicesService {

  constructor(private _http:HttpClient) {}
   url = 'http://localhost:3000/Shipments';
   url2 ='http://localhost:3000/Shipment';
   
   
    getShipmentResult():Observable<any>{
      // console.log("Service...."+this.http.get()
      return this._http.get(this.url);
      
    }
   
      
   getdata(){

    return this._http.get(this.url);

   }
  

}
