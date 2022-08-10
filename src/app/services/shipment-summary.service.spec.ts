import { TestBed } from '@angular/core/testing';

import { ShipmentSummaryService } from './shipment-summary.service';

describe('ShipmentSummaryService', () => {
  let service: ShipmentSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
