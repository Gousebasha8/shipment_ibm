import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-search',
  templateUrl: './shipment-search.component.html',
  styleUrls: ['./shipment-search.component.css']
})
export class ShipmentSearchComponent implements OnInit {

  constructor(private router:Router) { }
  getData(){
    console.log("getData working");
    this.router.navigate(['shipmetListResult']);
    
  }

  ngOnInit(): void {
  }

}
