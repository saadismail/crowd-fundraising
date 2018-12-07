/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjService } from './proj.service';

describe('ProjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjService]
    });
  });

  it('should ...', inject([ProjService], (service: ProjService) => {
    expect(service).toBeTruthy();
  }));
});
