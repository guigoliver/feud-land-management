import { Test, TestingModule } from '@nestjs/testing';
import { NobleService } from './noble.service';

describe('NobleService', () => {
  let service: NobleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NobleService],
    }).compile();

    service = module.get<NobleService>(NobleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
