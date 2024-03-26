import { Test, TestingModule } from '@nestjs/testing';
import { FeudService } from './feud.service';

describe('FeudService', () => {
  let service: FeudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeudService],
    }).compile();

    service = module.get<FeudService>(FeudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
