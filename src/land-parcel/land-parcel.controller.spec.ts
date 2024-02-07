import { Test, TestingModule } from '@nestjs/testing';
import { LandParcelController } from './land-parcel.controller';
import { LandParcelService } from './land-parcel.service';

describe('LandParcelController', () => {
  let controller: LandParcelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LandParcelController],
      providers: [LandParcelService],
    }).compile();

    controller = module.get<LandParcelController>(LandParcelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
