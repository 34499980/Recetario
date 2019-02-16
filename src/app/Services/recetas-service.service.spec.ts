import { TestBed } from '@angular/core/testing';

import { RecetasServiceService } from './recetas-service.service';

describe('RecetasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecetasServiceService = TestBed.get(RecetasServiceService);
    expect(service).toBeTruthy();
  });
});
