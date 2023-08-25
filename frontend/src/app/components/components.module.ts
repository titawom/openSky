import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportSelectorComponent } from './airport-selector/airport-selector.component';
import { FormsModule } from '@angular/forms';
import { ArrivalsTableComponent } from './arrivals-table/arrivals-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AirportSelectorComponent,
    ArrivalsTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    AirportSelectorComponent,
    ArrivalsTableComponent
  ]
})
export class ComponentsModule { }
