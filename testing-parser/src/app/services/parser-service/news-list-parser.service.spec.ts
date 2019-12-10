import { TestBed } from '@angular/core/testing';

import { NewsListParserService } from './news-list-parser.service';

describe('ParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsListParserService = TestBed.get(NewsListParserService);
    expect(service).toBeTruthy();
  });
});
