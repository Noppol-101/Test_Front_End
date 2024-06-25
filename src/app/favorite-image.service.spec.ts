import { TestBed } from '@angular/core/testing';

import { FavoriteImageService } from './favorite-image.service';

describe('FavoriteImageService', () => {
  let service: FavoriteImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
