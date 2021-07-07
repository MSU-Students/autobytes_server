import { Test, TestingModule } from '@nestjs/testing';
import { ClearanceService } from './clearance.service';

describe('ClearanceService', () => {
  let service: ClearanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClearanceService],
    }).compile();

    service = module.get<ClearanceService>(ClearanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
