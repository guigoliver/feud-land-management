import { Injectable } from '@nestjs/common';
import { CreateLandParcelDto } from './dto/create-land-parcel.dto';
import { UpdateLandParcelDto } from './dto/update-land-parcel.dto';

@Injectable()
export class LandParcelService {
  create(createLandParcelDto: CreateLandParcelDto) {
    return 'This action adds a new landParcel';
  }

  findAll() {
    return `This action returns all landParcel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} landParcel`;
  }

  update(id: number, updateLandParcelDto: UpdateLandParcelDto) {
    return `This action updates a #${id} landParcel`;
  }

  remove(id: number) {
    return `This action removes a #${id} landParcel`;
  }
}
