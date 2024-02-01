import { Test, TestingModule } from '@nestjs/testing';
import { AcreService } from './acre.service';

describe('AcreService', () => {
  let service: AcreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcreService],
    }).compile();

    service = module.get<AcreService>(AcreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
