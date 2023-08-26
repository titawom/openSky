import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-arrival-map',
  templateUrl: './arrival-map.component.html',
  styleUrls: ['./arrival-map.component.css']
})
export class ArrivalMapComponent implements OnInit {

  receivedData: any;
  airport!: string;

  constructor (private dataService: DataService) {
    this.dataService.dataToSend$.subscribe((data: any) => {
      this.receivedData = data;
      this.airport = this.receivedData["data"][0]["estArrivalAirport"];
    });
  }
  ngOnInit() {
    const map = L.map('map').setView([37.7749, -122.4194], 1); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(map);

    this.receivedData["data"].forEach((element: any) => {

      if (element["estDepartureAirportHorizDistance"] != null &&
          element["estDepartureAirportVertDistance"] != null) {
            const departureAirportCoords: L.LatLngExpression = [
              element["estDepartureAirportHorizDistance"],
              element["estDepartureAirportVertDistance"]
             ]; 
     
           const arrivalMarker = L.marker(departureAirportCoords, {
             icon: L.icon({
               iconUrl: 'assets/marker-icon.png',
               shadowUrl: 'assets/marker-shadow.png' 
             })
           }).addTo(map);
      }
    });
  }
}
