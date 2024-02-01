import { Test, TestingModule } from '@nestjs/testing';
import { AcreController } from './acre.controller';
import { AcreService } from './acre.service';

describe('AcreController', () => {
  let controller: AcreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcreController],
      providers: [AcreService],
    }).compile();

    controller = module.get<AcreController>(AcreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
