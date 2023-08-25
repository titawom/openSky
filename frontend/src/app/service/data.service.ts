import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataToSendSubject = new BehaviorSubject<any[]>([]);
  dataToSend$ = this.dataToSendSubject.asObservable();

  setDataToSend(data: any) {
    this.dataToSendSubject.next(data);
  }
}
