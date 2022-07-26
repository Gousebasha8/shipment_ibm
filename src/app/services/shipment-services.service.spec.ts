import { TestBed } from '@angular/core/testing';

import { ShipmentServicesService } from './shipment-services.service';

describe('ShipmentServicesService', () => {
  let service: ShipmentServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
