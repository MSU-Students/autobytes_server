import { Test, TestingModule } from '@nestjs/testing';
import { ArchivedController } from './archived.controller';

describe('ArchivedController', () => {
  let controller: ArchivedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArchivedController],
    }).compile();

    controller = module.get<ArchivedController>(ArchivedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
