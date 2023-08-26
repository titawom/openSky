import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { ArrivalsComponent } from './vistas/arrivals/arrivals.component';
import { ArrivalMapComponent } from './components/arrival-map/arrival-map.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'arrivals', component: ArrivalsComponent },
  { path: 'map', component: ArrivalMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
