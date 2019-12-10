import { TestBed } from '@angular/core/testing';

import { NewsItemParserService } from './news-item-parser.service';

describe('NewsItemParseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsItemParserService = TestBed.get(NewsItemParserService);
    expect(service).toBeTruthy();
  });
});
