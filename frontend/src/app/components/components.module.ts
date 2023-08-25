import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportSelectorComponent } from './airport-selector/airport-selector.component';
import { FormsModule } from '@angular/forms';
import { ArrivalsTableComponent } from './arrivals-table/arrivals-table.component';

@NgModule({
  declarations: [
    AirportSelectorComponent,
    ArrivalsTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AirportSelectorComponent,
    ArrivalsTableComponent
  ]
})
export class ComponentsModule { }
