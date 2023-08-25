import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportSelectorComponent } from './airport-selector/airport-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AirportSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AirportSelectorComponent
  ]
})
export class ComponentsModule { }
