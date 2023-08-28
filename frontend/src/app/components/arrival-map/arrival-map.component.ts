import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-arrival-map',
  templateUrl: './arrival-map.component.html',
  styleUrls: ['./arrival-map.component.css']
})
export class ArrivalMapComponent implements OnInit {

  response: any;
  receivedData: any;
  airport!: string;
  map: any;

  constructor (private dataService: DataService,
               private http: HttpClient) {
    this.dataService.dataToSend$.subscribe((data: any) => {
      this.receivedData = data;
      this.airport = this.receivedData["data"][0]["estArrivalAirport"];
    });
  }
  ngOnInit() {
    this.map = L.map('map').setView([37.7749, -122.4194], 1); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);

    this.receivedData["data"].forEach((element: any) => {
      this.getLatitudeAndLongitudePath(element["icao24"]);
    });
  }

  getLatitudeAndLongitudePath(icao24: string) {
    
    const url = "http://localhost:8000/api/tracks/" + 
                icao24 + "/" +
                "0";

    this.http.get<any>(url).subscribe(
                (data) => {
                    this.response = data["data"]["path"];
                    this.addViewpointToMap();
                  },
                  (error) => {
                    console.error('Error:', error);
                  }
                  );  
  }

  addViewpointToMap () {

    if (this.response != null) {
      this.response.forEach((element: any) => {
        if (element[1] != null &&
          element[2] != null) {
              const departureAirportCoords: L.LatLngExpression = [
                element[1],
                element[2]
              ]; 
            const arrivalMarker = L.marker(departureAirportCoords, {
              icon: L.icon({
                iconUrl: 'assets/marker-icon.png',
                shadowUrl: 'assets/marker-shadow.png' 
              })
            }).addTo(this.map);
        }
      });
    }
  }

}
