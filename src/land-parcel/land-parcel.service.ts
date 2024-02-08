import { Injectable } from '@nestjs/common';
import { CreateLandParcelDto } from './dto/create-land-parcel.dto';
import { UpdateLandParcelDto } from './dto/update-land-parcel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { LandParcel } from './entities/land-parcel.entity';

@Injectable()
export class LandParcelService {
  constructor(
    @InjectRepository(LandParcel)
    private landParcelRepo: Repository<LandParcel>,
  ) {}

  async create(createLandParcelDto: CreateLandParcelDto) {
    const acreIds = createLandParcelDto.acres.map((acre) => acre.id);
    const acres = await this.landParcelRepo.findBy({
      id: In(acreIds),
    });

    if (acres.length !== acreIds.length) {
      throw new Error('Some acres have not been found.');
    }

    const landParcel = LandParcel.create(createLandParcelDto);
    await this.landParcelRepo.save(landParcel);
    return landParcel;
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
