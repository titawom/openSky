import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ArrivalsComponent } from './arrivals/arrivals.component';
import { DataService } from '../service/data.service';


@NgModule({
  declarations: [
    HomeComponent,
    ArrivalsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  providers: [DataService]
})
export class VistasModule { }
