import { Injectable } from '@nestjs/common';
import { CreateLandParcelDto } from './dto/create-land-parcel.dto';
import { UpdateLandParcelDto } from './dto/update-land-parcel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LandParcel } from './entities/land-parcel.entity';

@Injectable()
export class LandParcelService {
  constructor(
    @InjectRepository(LandParcel)
    private landParcelRepo: Repository<LandParcel>,
  ) {}

  create(createLandParcelDto: CreateLandParcelDto) {
    const landParcel = this.landParcelRepo.create(createLandParcelDto);
    return this.landParcelRepo.save(landParcel);
  }

  findAll() {
    return this.landParcelRepo.find();
  }

  findOne(id: number) {
    return this.landParcelRepo.findOne({
      where: { id },
    });
  }

  update(id: number, updateLandParcelDto: UpdateLandParcelDto) {
    return this.landParcelRepo.update({ id }, updateLandParcelDto);
  }

  // MAKE ACRES AND SERFS FREE ON DELETE
  remove(id: number) {
    return `This action removes a #${id} landParcel`;
  }
}
