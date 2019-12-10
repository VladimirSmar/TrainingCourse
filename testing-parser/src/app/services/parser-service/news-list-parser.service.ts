import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsListParserService {

  constructor(
    private http: HttpClient
  ) { }

  public newsXpathExpression = '//*[@id="dle-content"]/div/div[@class="item"]';

  public getHtmlData(htmlUrl: string): Observable<string> {
    const requestOptions: object = {
      responseType: 'text'
    };

    return this.http.get<string>(htmlUrl, requestOptions);
  }

  public parseHtmlData(htmlData: string): Array<object> {

    const parsedData: Array<object> = [];

    const parser: DOMParser = new DOMParser();
    const responseDoc: Document = parser.parseFromString(htmlData, 'text/html');

    const newsData: XPathResult = responseDoc.evaluate(this.newsXpathExpression, responseDoc, null, XPathResult.ANY_TYPE, null);

    let thisNewsData: Node = newsData.iterateNext();

    while (thisNewsData) {

      const thisNewsUrl: string = this.getNewsUrl(thisNewsData);
      const thisNewsDate: Date = this.getNewsDate(thisNewsData);
      const thisNewsTitle: string = this.getNewsTitle(thisNewsData);
      const thisNewsImgUrl: string = this.getNewsImage(thisNewsData);
      const thisNewsDescription: string = this.getNewsDescription(thisNewsData);

      parsedData.push({
        url: thisNewsUrl,
        date: thisNewsDate,
        title: thisNewsTitle,
        imgUrl: thisNewsImgUrl,
        description: thisNewsDescription
      });

      thisNewsData = newsData.iterateNext();
    }

    return parsedData;
  }

  public getNewsUrl(node: Node): string {
    return (node as HTMLElement).querySelector('div.item-header > a:last-child').getAttribute('href');
  }

  public getNewsDate(node: Node): Date {
    const thisDateNode: Element = (node as HTMLElement)
      .querySelector('div.item-content-date');
    const newsDate: Date = new Date(0);
    newsDate.setDate(+thisDateNode.querySelector('strong').textContent);
    newsDate.setMonth(+thisDateNode.querySelector('span').textContent - 1);
    newsDate.setFullYear(+thisDateNode.querySelectorAll('span')[1].textContent);
    return newsDate;
  }

  public getNewsTitle(node: Node): string {
    return (node as HTMLElement)
      .querySelector('div.item-content-head > h3 > a').textContent;
  }

  public getNewsImage(node: Node): string {
    return 'https://masheka.by' + (node as HTMLElement)
      .querySelector('div.item-header > a > img').getAttribute('src');
  }

  public getNewsDescription(node: Node): string {
    return (node as HTMLElement)
      .querySelector('div.item-content > p').textContent;
  }

}

