import { Component, OnInit } from '@angular/core';

import { News } from '../../models/news-model';
import { NewsServiceService } from '../../services/news-service/news-service.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  public newsList: News[] = [];

  constructor(
    private newsService: NewsServiceService
  ) { }

  ngOnInit() {
    this.getNewsList();
  }

  getNewsList(): void {
    this.newsService.getNewsList().subscribe(newsList => this.newsList = newsList);
  }

  checkNewsItem(id: number): void {

  }
}
