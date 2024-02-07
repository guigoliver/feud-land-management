import { Test, TestingModule } from '@nestjs/testing';
import { SerfService } from './serf.service';

describe('SerfService', () => {
  let service: SerfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerfService],
    }).compile();

    service = module.get<SerfService>(SerfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
