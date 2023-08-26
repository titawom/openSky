import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-arrival-map',
  templateUrl: './arrival-map.component.html',
  styleUrls: ['./arrival-map.component.css']
})
export class ArrivalMapComponent implements OnInit {
  ngOnInit() {
    const map = L.map('map').setView([37.7749, -122.4194], 10); // Coordenadas de San Francisco

    // Agrega una capa de teselas
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© Contribuyentes de OpenStreetMap'
    }).addTo(map);

    // Coordenadas de los aeropuertos
    const arrivalAirportCoords: L.LatLngExpression = [45.7128, -74.0060]; // Nueva York
    const departureAirportCoords: L.LatLngExpression = [34.0522, -118.2437]; // Los Ángeles

    // Agrega marcadores para los aeropuertos de llegada y partida
    const arrivalMarker = L.marker(arrivalAirportCoords, {
      icon: L.icon({
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png' 
      })
    }).addTo(map);
    const departureMarker = L.marker(departureAirportCoords, {
      icon: L.icon({
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png' 
      })
    }).addTo(map);
  }
}
