import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
    selector: 'app-airport-selector',
    templateUrl: './airport-selector.component.html',
    styleUrls: ['./airport-selector.component.css']
})
export class AirportSelectorComponent {

    response: any;
    airports = [
        { code: '0', name: 'Select date' },
    ];

    selectedAirport = '0';
    startDate = '1517227200';
    endDate = '1517230800';

    constructor(private http: HttpClient,
                private router: Router,
                private dataService: DataService) {}

    getData() {

        if (this.startDate != "" && this.endDate != "") {
            this.http.get<any>(this.getUrl()).subscribe(
                (data) => {
                    this.response = data;
                    this.addDataToSelect();
                },
                (error) => {
                    console.error('Error:', error);
                }
            );
        } else {
            this.airports = [
                { code: '0', name: 'Select date' },
            ];
        }
    }

    send() {
        let dataToSend = {
                airport: this.selectedAirport,
                startDate: this.startDate,
                endDate: this.endDate 
            };
      
          this.dataService.setDataToSend(dataToSend);
      
          this.router.navigate(['/arrivals']);
    }

    
    addDataToSelect() {
       this.response["data"].forEach((element: any) => {
        this.airports.push(
            { code: element, name: element },
        )
       });
    }

    getUrl(): string {
        const dateStartDate = new Date(this.startDate);
        const dateEndDate = new Date(this.endDate);
        
        // Convierte la fecha a Unix time (segundos desde la época)
        let unixTimeStartDate = Math.floor(dateStartDate.getTime() / 1000);
        let unixTimeEndDate = Math.floor(dateEndDate.getTime() / 1000);
        
        //TODO: remove 
        unixTimeStartDate = 1517227200;
        unixTimeEndDate = 1517230800;
        
        return "http://localhost:8000/api/all/" + 
                    unixTimeStartDate + "/" +
                    unixTimeEndDate;
    }
}
