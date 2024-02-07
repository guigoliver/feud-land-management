import { Test, TestingModule } from '@nestjs/testing';
import { SerfController } from './serf.controller';
import { SerfService } from './serf.service';

describe('SerfController', () => {
  let controller: SerfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SerfController],
      providers: [SerfService],
    }).compile();

    controller = module.get<SerfController>(SerfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
