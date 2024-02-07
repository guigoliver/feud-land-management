import { Test, TestingModule } from '@nestjs/testing';
import { LandParcelService } from './land-parcel.service';

describe('LandParcelService', () => {
  let service: LandParcelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandParcelService],
    }).compile();

    service = module.get<LandParcelService>(LandParcelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
