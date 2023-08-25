import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-airport-selector',
    templateUrl: './airport-selector.component.html',
    styleUrls: ['./airport-selector.component.css']
})
export class AirportSelectorComponent {

    response: any;

    constructor(private http: HttpClient) {}

    getData() {
        this.http.get<any>('http://localhost:8000/api/all/1517227200/1517230800').subscribe(
            (data) => {
                this.response = data;
                console.log(data);
            },
            (error) => {
                console.error('Error:', error);
            }
        );
    }

    ngOnInit() {
        this.getData();
    }

    airports = [
        { code: 'JFK', name: 'John F. Kennedy Airport (JFK)' },
        { code: 'LAX', name: 'Los Angeles International Airport (LAX)' }
        // Add more airports as needed
    ];

    selectedAirport = '';
    startDate = '';
    endDate = '';

    search() {
        console.log('Selected Airport:', this.selectedAirport);
        console.log('Start Date:', this.startDate);
        console.log('End Date:', this.endDate);
        // Perform search or other actions with the selected values
    }

    
}
