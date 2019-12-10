import { Component, OnInit } from '@angular/core';
import { NewsDataService } from 'src/app/services/parser-service/news-data.service';
import { NewsItemParserService } from 'src/app/services/parser-service/news-item-parser.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  public currentUrl: string = undefined;
  public htmlData: any;

  constructor(
    private newsDataService: NewsDataService,
    private newsItemParserService: NewsItemParserService
  ) { }

  ngOnInit() {
    this.newsDataService.currentUrl.subscribe(currentUrl => this.currentUrl = currentUrl);
    this.newsItemParserService.getHtmlData(this.currentUrl).subscribe(htmlData => {
      this.htmlData = htmlData;
      this.newsItemParserService.parseHtmlData(this.htmlData);
    });
  }

}
