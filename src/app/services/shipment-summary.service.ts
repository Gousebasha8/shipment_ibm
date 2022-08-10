import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipment } from '../models/shipment/shipment.module';

@Injectable({
  providedIn: 'root'
})
export class ShipmentSummaryService {

  constructor(private http:HttpClient) { }

  getShipmentResult():Observable<Shipment>{
    return this.http.get<Shipment>('http://localhost:3000/Shipment')
    
  }

}
