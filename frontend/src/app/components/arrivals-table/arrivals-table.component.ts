import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { Router } from '@angular/router';

export interface ArrivalData {
  departureAirport: string;
  callsign: string;
  departureAirportHorizDistance: string;
  departureAirportVertDistance: string;
}

let ELEMENT_DATA: ArrivalData[] = [];

@Component({
  selector: 'app-arrivals-table',
  templateUrl: './arrivals-table.component.html',
  styleUrls: ['./arrivals-table.component.css']
})

export class ArrivalsTableComponent {

  displayedColumns: string[] = ['departureAirport', 'callsign', 'departureAirportHorizDistance', 'departureAirportVertDistance'];
  dataSource = new MatTableDataSource<ArrivalData>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ArrivalData>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  receivedData: any;
  response: any;

  constructor(private dataService: DataService,
              private http: HttpClient,
              private _liveAnnouncer: LiveAnnouncer,
              private router: Router) {
                
                this.dataService.dataToSend$.subscribe(data => {
                  this.receivedData = data;
                });
                this.showArrivalsTable();    
              }

  showArrivalsTable() {
    //TODO: remove 
    this.receivedData["airport"] = "EDDF";
    this.receivedData["startDate"] = "1517227200";
    this.receivedData["endDate"] = "1517230800";

    const url = "http://localhost:8000/api/arrival/" + 
                this.receivedData["airport"] + "/" +
                this.receivedData["startDate"] + "/" +
                this.receivedData["endDate"];

    this.http.get<any>(url).subscribe(
                (data) => {
                    this.response = data;
                    this.initData();
                  },
                  (error) => {
                    console.error('Error:', error);
                  }
                  );  
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  initData() {

    this.response["data"].forEach((element: any) => {

      const newElement: ArrivalData = {
        departureAirport: element["estDepartureAirport"],
        callsign: element["callsign"],
        departureAirportHorizDistance: element["estArrivalAirportHorizDistance"],
        departureAirportVertDistance: element["estDepartureAirportVertDistance"]
      };
      
      ELEMENT_DATA.push(newElement);
    });
    
    this.dataSource._updateChangeSubscription();
  }

  addData() {
    const newElement: ArrivalData = {
      departureAirport: '1',
      callsign: 'New Element',
      departureAirportHorizDistance: '1',
      departureAirportVertDistance: 'NE'
    };

    this.dataSource.data.push(newElement);
    this.dataSource._updateChangeSubscription();
  }

  removeData() {
    this.dataSource.data.pop();
    this.dataSource._updateChangeSubscription();
  }
  
  send() {
      this.dataService.setDataToSend(this.response);
      this.router.navigate(['/map']);
}
}
