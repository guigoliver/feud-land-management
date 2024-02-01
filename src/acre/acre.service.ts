import { Injectable } from '@nestjs/common';
import { CreateAcreDto } from './dto/create-acre.dto';
import { UpdateAcreDto } from './dto/update-acre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Acre } from './entities/acre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AcreService {

  constructor(@InjectRepository(Acre) private acreRepo: Repository<Acre>,) {}

  create(createAcreDto: CreateAcreDto) {
    const acre = this.acreRepo.create(createAcreDto)
    return this.acreRepo.save(acre)
  }

  findAll() {
    return this.acreRepo.find()
  }

  findOne(id: string) {
    return this.acreRepo.findOne({
      where: { id }
    })
  }

  update(id: string, updateAcreDto: UpdateAcreDto) {
    return this.acreRepo.update({id}, updateAcreDto)
  }

  remove(id: string) {
    return this.acreRepo.delete({id})
  }
}
