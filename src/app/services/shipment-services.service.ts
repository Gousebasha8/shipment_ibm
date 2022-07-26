import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipments } from '../models/shipments/shipments';

@Injectable({
  providedIn: 'root'
})
export class ShipmentServicesService {

  constructor(private http:HttpClient) {}

    getShipmentResult():Observable<Shipments>{
      return this.http.get<Shipments>('http://localhost:3000/Shipments')
      
    }

  

}
