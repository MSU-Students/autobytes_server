import { Test, TestingModule } from '@nestjs/testing';
import { ClearanceController } from './clearance.controller';

describe('ClearanceController', () => {
  let controller: ClearanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClearanceController],
    }).compile();

    controller = module.get<ClearanceController>(ClearanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
