import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/news-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getNewsList(): Observable<News[]> {
    return this.http.get<News[]>('http://localhost:4200/assets/dumbdata/testing-news.json');
  }
}
