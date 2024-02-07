import { Test, TestingModule } from '@nestjs/testing';
import { NobleController } from './noble.controller';
import { NobleService } from './noble.service';

describe('NobleController', () => {
  let controller: NobleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NobleController],
      providers: [NobleService],
    }).compile();

    controller = module.get<NobleController>(NobleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
