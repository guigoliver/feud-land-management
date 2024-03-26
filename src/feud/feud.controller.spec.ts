import { Test, TestingModule } from '@nestjs/testing';
import { FeudController } from './feud.controller';
import { FeudService } from './feud.service';

describe('FeudController', () => {
  let controller: FeudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeudController],
      providers: [FeudService],
    }).compile();

    controller = module.get<FeudController>(FeudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
