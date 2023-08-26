import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportSelectorComponent } from './airport-selector/airport-selector.component';
import { FormsModule } from '@angular/forms';
import { ArrivalsTableComponent } from './arrivals-table/arrivals-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { ArrivalMapComponent } from './arrival-map/arrival-map.component';

@NgModule({
  declarations: [
    AirportSelectorComponent,
    ArrivalsTableComponent,
    ArrivalMapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule
  ],
  exports: [
    AirportSelectorComponent,
    ArrivalsTableComponent,
    ArrivalMapComponent
  ]
})
export class ComponentsModule { }
