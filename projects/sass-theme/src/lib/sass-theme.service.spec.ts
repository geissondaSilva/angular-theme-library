import { TestBed } from '@angular/core/testing';

import { SassThemeService } from './sass-theme.service';

describe('SassThemeService', () => {
  let service: SassThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SassThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
