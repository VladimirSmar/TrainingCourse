import { Component, OnInit } from '@angular/core';
import { NewsListParserService } from 'src/app/services/parser-service/news-list-parser.service';
import { Router } from '@angular/router';
import { NewsDataService } from 'src/app/services/parser-service/news-data.service';

@Component({
  selector: 'app-parse-result',
  templateUrl: './parse-result.component.html',
  styleUrls: ['./parse-result.component.scss']
})
export class ParseResultComponent implements OnInit {

  constructor(
    private newsListParserService: NewsListParserService,
    private newsDataService: NewsDataService,
    private router: Router
  ) { }

  public htmlUrl = 'https://masheka.by/novosti-mogileva/';
  public parsedData: Array<object>;

  ngOnInit() {
    this.newsListParserService.getHtmlData(this.htmlUrl).subscribe(parsedData =>
      this.parsedData = this.newsListParserService.parseHtmlData(parsedData));
  }

  checkNewsItem(newsUrl: string) {
    this.newsDataService.sendUrl(newsUrl);
    this.router.navigate(['news-item']);
  }
}
