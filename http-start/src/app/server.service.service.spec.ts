import { TestBed, inject } from '@angular/core/testing';

import { Server.ServiceService } from './server.service.service';

describe('Server.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Server.ServiceService]
    });
  });

  it('should be created', inject([Server.ServiceService], (service: Server.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
