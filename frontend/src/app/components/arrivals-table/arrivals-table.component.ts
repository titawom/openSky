import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-arrivals-table',
  templateUrl: './arrivals-table.component.html',
  styleUrls: ['./arrivals-table.component.css']
})
export class ArrivalsTableComponent {

  receivedData: any;
  response: any;

  constructor(private dataService: DataService,
              private http: HttpClient) {}

  ngOnInit() {
    this.dataService.dataToSend$.subscribe(data => {
      this.receivedData = data;
    });
    this.showArrivalsTable();
  }
  
  showArrivalsTable() {
    console.log(this.receivedData["airport"]);
    console.log(this.receivedData["startDate"]);
    console.log(this.receivedData["endDate"]);
  }
}
