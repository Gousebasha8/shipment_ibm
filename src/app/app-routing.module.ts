import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ShipmentListComponent } from './components/shipment-list/shipment-list.component';
import { ShipmentSearchComponent } from './components/shipment-search/shipment-search.component';
import { ShipmentSummaryComponent } from './components/shipment-summary/shipment-summary.component';

const routes: Routes = [
  {
    path:'' ,redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'shipmetListResult',
    component:ShipmentListComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'search',
    component:ShipmentSearchComponent
  },
  {
    path:'shipmentNO/:id',component:ShipmentSummaryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
