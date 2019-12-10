import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsItemParserService {

  constructor(
    private http: HttpClient
  ) { }

  public newsXpathExpression = `//*[@id="dle-content"]/div[@class="ot-panel-block panel-light"]
  /div[@class="shortcode-content"]`;

  public getHtmlData(htmlUrl: string): Observable<string> {
    const requestOptions: object = {
      responseType: 'text'
    };

    return this.http.get<string>(htmlUrl, requestOptions);
  }

  public parseHtmlData(htmlData: string) {

    const parser: DOMParser = new DOMParser();
    const responseDoc: Document = parser.parseFromString(htmlData, 'text/html');
    const newsData: XPathResult = responseDoc.evaluate(this.newsXpathExpression, responseDoc, null, XPathResult.ANY_TYPE, null);
    const thisNewsData: Node = newsData.iterateNext();

    const nodesToDelete: Array<Node> = [];
    const comments = responseDoc.evaluate('//comment()', responseDoc, null, XPathResult.ANY_TYPE, null);
    let comment = comments.iterateNext();
    while (comment) {
      nodesToDelete.push(comment);
      comment = comments.iterateNext();
    }
    nodesToDelete.forEach(node => node.parentNode.removeChild(node));

    const fullNewsContainer: Element = document.getElementsByClassName('insertHtmlTest')[0];
    fullNewsContainer.append(thisNewsData);

    this.clearHtmlData(fullNewsContainer);
  }

  public clearHtmlData(element: Element) {

    const elementHtml = element.querySelectorAll('*');
    elementHtml.forEach(node => node.removeAttribute('style'));

    const headerNode = element.querySelector('div.article-header-meta');
    if (headerNode) {
      headerNode.parentNode.removeChild(headerNode);
    }

    const footerNode = element.querySelector('div.shortcode-content span');
    if (footerNode) {
      footerNode.parentNode.removeChild(footerNode);
    }

    const formNodes = element.querySelectorAll('form');
    formNodes.forEach(node => node.parentNode.removeChild(node));

    const linkNodes = element.querySelectorAll('a');
    linkNodes.forEach(link => {
      link.removeAttribute('target');
      link.removeAttribute('href');
    });



    const mashaNodes = element.querySelectorAll('span.masha-index');
    mashaNodes.forEach(node => node.parentNode.removeChild(node));

    const imageNodes = element.querySelectorAll('img');
    imageNodes.forEach(image => {
      let imageUrl: string = image.getAttribute('src');
      imageUrl = 'https://masheka.by' + imageUrl;
      image.setAttribute('src', imageUrl);
    });
  }

  /* TODO

  Раскидать все написанное выше по методам, добавить замену классов на собственные
  Придумать что делать с видео с ютуба и тд, без CORS ютуб тупо отвечает запретом

  */

  public removeUnneededNodes(element: Element) {

  }

  public removeCommentNodes(element: Element) {

  }

  public removeScriptNodes(element: Element) {

  }

  public replaceHtmlDataClasses(element: Element) {

  }

  public replaceLocalImgLinks(element: Element) {

  }

  public removeUnneededNodeAttributes(element: Element) {

  }

}
