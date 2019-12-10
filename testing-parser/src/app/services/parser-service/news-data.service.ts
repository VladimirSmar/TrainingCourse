import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {

  private urlSource = new BehaviorSubject<string>('initial state');
  currentUrl = this.urlSource.asObservable();

  constructor() { }

  sendUrl(url: string) {
    this.urlSource.next(url);
  }
}
